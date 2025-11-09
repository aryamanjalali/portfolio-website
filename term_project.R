library(dplyr)
install.packages("tidyr")
library(tidyr)

azimuth_data <- read.csv("/Users/aryaman/Desktop/CS555TermProject/output_csv_files/power_901_climatology_azimuth_utc.csv")
horizon_data <- read.csv("/Users/aryaman/Desktop/CS555TermProject/output_csv_files/power_901_climatology_horizon_utc.csv")

merged_data <- inner_join(azimuth_data, horizon_data, by = c("lon", "lat", "time"))

cleaned_data <- merged_data %>%
  drop_na()

azimuth_cols <- grep("SG_SAA_", names(cleaned_data), value = TRUE)
horizon_cols <- grep("SG_HRZ_", names(cleaned_data), value = TRUE)

cleaned_data <- cleaned_data %>%
  mutate(across(all_of(c(azimuth_cols, horizon_cols)), scale))

write.csv(cleaned_data, "cleaned_data.csv", row.names = FALSE)


nrow(cleaned_data)

set.seed(123)
sampled_data <- cleaned_data %>%
  sample_n(1000)

write.csv(sampled_data, "sampled_cleaned_data.csv", row.names = FALSE)

print(dim(sampled_data))




#Summary Analysis
summary(sampled_data[, c(azimuth_cols, horizon_cols)])


library(ggplot2)

ggplot(sampled_data, aes(x = SG_SAA_00)) +
  geom_histogram(binwidth = 0.5, fill = "blue", alpha = 0.7) +
  labs(title = "Distribution of SG_SAA_00", x = "Azimuth Angle", y = "Frequency")



#Correlation Analysis
cor_matrix <- cor(sampled_data[, c(azimuth_cols, horizon_cols)])
print(cor_matrix)
write.csv(cor_matrix, "correlation_matrix.csv", row.names = TRUE)

cor_value <- cor(sampled_data$SG_SAA_00, sampled_data$SG_HRZ_00)
print(paste("Correlation between SG_SAA_00 and SG_HRZ_00:", cor_value))


install.packages("reshape2")
library(reshape2)

cor_melt <- melt(cor_matrix)
ggplot(cor_melt, aes(x = Var1, y = Var2, fill = value)) +
  geom_tile() +
  scale_fill_gradient2(low = "blue", mid = "white", high = "red", midpoint = 0) +
  labs(title = "Correlation Heatmap", x = "Variables", y = "Variables")



#Multiple Linear Regression
install.packages("car")
library(car)

sampled_data$solar_potential <- rowMeans(sampled_data[, azimuth_cols], na.rm = TRUE)

model <- lm(solar_potential ~ ., data = sampled_data[, c("solar_potential", azimuth_cols, horizon_cols)])
summary(model)

write.csv(summary(model)$coefficients, "regression_results.csv", row.names = TRUE)

scatterplotMatrix(sampled_data[, c("solar_potential", "SG_SAA_00", "SG_HRZ_00")])


#ANOVA
anova_model <- aov(solar_potential ~ factor(time), data = sampled_data)

anova_results <- summary(anova_model)

anova_table <- as.data.frame(anova_results[[1]])

write.csv(anova_table, "anova_results.csv", row.names = TRUE)


library(ggplot2)
ggplot(sampled_data, aes(x = factor(time), y = solar_potential)) +
  stat_summary(fun = mean, geom = "bar", fill = "orange", alpha = 0.7) +
  labs(title = "Mean Solar Potential by Hour", x = "Hour", y = "Mean Solar Potential")

#Clustering Analysis
#k-means
set.seed(123)
kmeans_model <- kmeans(sampled_data[, c(azimuth_cols, horizon_cols)], centers = 3)

sampled_data$cluster <- as.factor(kmeans_model$cluster)

write.csv(sampled_data, "sampled_data_with_clusters.csv", row.names = FALSE)


ggplot(sampled_data, aes(x = lon, y = lat, color = cluster)) +
  geom_point(alpha = 0.7) +
  labs(title = "Clustered Regions by Solar Potential", x = "Longitude", y = "Latitude")

#Hierarchial Clustering
distance_matrix <- dist(sampled_data[, c(azimuth_cols, horizon_cols)], method = "euclidean")

hc_model <- hclust(distance_matrix, method = "ward.D2")

plot(hc_model, main = "Hierarchical Clustering Dendrogram", sub = "", xlab = "", cex = 0.6)


sampled_data$hc_cluster <- cutree(hc_model, k = 3)


ggplot(sampled_data, aes(x = lon, y = lat, color = as.factor(hc_cluster))) +
  geom_point(alpha = 0.7) +
  labs(title = "Hierarchical Clustered Regions", x = "Longitude", y = "Latitude")



#Final results
write.csv(sampled_data, "final_sampled_data.csv", row.names = FALSE)




