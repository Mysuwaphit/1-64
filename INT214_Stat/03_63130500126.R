# Sample datasets
sample1 <- c(29,49,42,43,32,38,37,41,27,27,30)
sample2 <- c(1,2,3,5,10,500)
sample3 <- c("Male","Female","Male","Female","Female")

table(sample1)
library(DescTools)
help(package=DescTools)
Mode(sample1)

factor(sample3)
gender <- factor(sample3)
summary(gender)

data()
View(mtcars)
str(mtcars)
head(mtcars)
summary(mtcars)
colMeans(mtcars)

mean(mtcars$mpg)

Hotels <- read.csv("https://raw.githubusercontent.com/safesit23/INT214-Statistics/main/datasets/Hotels.csv")
View(Hotels)
mode(Hotels)



help(package=MASS)
data(cats)
View(cats)
View(survey)

summary(survey$Height,na.rm = TRUE)
mean(survey$Height,na.rm = TRUE)
max(survey$Height,na.rm = TRUE)
min(survey$Height,na.rm = TRUE)

sum(survey$Smoke[survey$Sex == "Male"])



