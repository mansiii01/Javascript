#include<stdio.h>
main(){
    //Q-1
    printf("Hello, World!");

    //Q-2
    int a,b;
    printf("Enter First num : ");
    scanf("%d",&a);
    printf("Enter Second num : ");
    scanf("%d",&b);
    int c = a+b;
    printf("Sum of two number : %d",c);

    //Q-3
    int n;
    printf("Enter any number : ");
    scanf("%d",&n);
    int fact = 1;
    for (int i = 1; i <= n; i++)
    {
        fact *= i;
    }
    printf("%d",fact);

    //Q-4
    int n;
    printf("Enter any number : ");
    scanf("%d",&n);
    if(n%2==0){
        printf("Number is even");
    }
    else{
        printf("Number is odd");
    }

    //Q-5
     int a,b,c;

    printf("enter value 1 :");
    scanf("%d",&a);

    printf("enter value 2 :");
    scanf("%d",&b);

    printf("enter value 3 :");
    scanf("%d",&c);

    if(a>b && a>c){
        printf("A is large...");
    }
    else if( b>a && b>c){
        printf("B is large...");
    }
    else{
        printf("C is large...");
    }

    //Q-6
    int a,b;

    printf("-----BEFORE SWAPING-----\n");

    printf("enter value 1 :");
    scanf("%d",&a);

    printf("enter value 2 :");
    scanf("%d",&b);

    printf("-----AFTER SWAPING-----\n");    

    printf("First Number Is %d\n",b);
    printf("Second Number Is %d",a);

    //Q-7
     int a;

    printf("enter Year :");
    scanf("%d",&a);

    if(a%4==0){
        printf("This is leap year...");
    }
    else{
        printf("This Is not leap year...");
    }

    //Q-8
    int a,first=0,second=1,ans;

    printf("Enter value : ");
    scanf("%d",&a);

    for(int i=0;i<=a;i++){
        printf("%d\t",first);
        ans=first+second;
        first=second;
        second=ans;
    }

    //Q-9
    int sum=0;
    char k[100];

    printf("Enter value : ");
    scanf("%s",&k);

    for(int i=0;k[i];i++){
        sum+=k[i]-'0';
    }
    printf("%d",sum);
    
}