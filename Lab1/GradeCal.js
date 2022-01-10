let score = 56;

if((score>=80)&&(score<=100))
{
    console.log("Your grade is 'A' ");
}
else if((score>=75)&&(score<=79))
{
    console.log("Your grade is 'B+' ");
}
else if((score>=70)&&(score<=74))
{
    console.log("Your grade is 'B' ");
}
else if((score>=65)&&(score<=69))
{
    console.log("Your grade is 'C+' ");
}
else if((score>=60)&&(score<=64))
{
    console.log("Your grade is 'C' ");
}
else if((score>=55)&&(score<=59))
{
    console.log("Your grade is 'D+' ");
}
else if((score>=50)&&(score<=54))
{
    console.log("Your grade is 'D' ");
}
else if((score>=0)&&(score<50))
{
    console.log("Your grade is 'E' ");
}
else
{
    console.log("Please input correct scores.");
}