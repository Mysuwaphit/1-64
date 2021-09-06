1+1
2*100-5
print("Hello") 
x <- 1
y <- 2
z <- x+y
print(z)

varA <- 100
class(varA)
varB <- TRUE
class(varB)
varC <- "Hello"
class(varC)
class(1==2)
1==2

?rep
animal <- c("Ant","Bird","Cat")
length(animal)
v1 <- c(1,2,3,4,5)
v4 <- c(1:100)
v1+v4

name <- c("Antony","Boky","Caty")
age <-c(10,25,30)
club <-c("Sec A","Sec B","Sec A")
retired <- c(T,F,T)
myList <- list(stdName = name,
               stdAge = age,
               stdClub = club,
               retired = retired)
myList$stdName
myList
View(myList)

continent <- c("Africa","Asia","Europe","North America","Oceania","South America","Antarctica")
countries <- c(54,48,51,23,14,12,0)
world <- data.frame(continent,countries)
continent <- c("Africa","Asia","Europe","North America","Oceania","South America","Antarctica")
countries <- c(54,48,51,23,14,12,0)
world <- data.frame(continent,countries)
continent <- c("Africa","Asia","Europe","North America","Oceania","South America","Antarctica")
countries <- c(54,48,51,23,14,12,0)
world <- data.frame(continent,countries)
View(world)


x <- c(1:10)

mean(x)
sum(x)

# Summaries
summary(x)
