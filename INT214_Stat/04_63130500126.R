library(dplyr)
glimpse(starwars)
mean(starwars$height)
typeof(starwars$mass)
typeof(starwars$height)
summary(starwars$height)
mean(starwars$height)

starwars$height %>% mean(na.rm=T)
