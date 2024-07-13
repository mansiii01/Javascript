#include <stdio.h>
#include<string.h>
    //Question-2

    int str_length(char str[])
    {
        int count_str=0;
        for(int i=0; str[i]; i++)
        {
            count_str++;
        }
        return count_str;
    }

    int main()
    {
        //Question-1

        int size, count=0;
        int arr[size];
        printf("Enter Arrary Size : ");
        scanf("%d",&size);
        printf("--- Enter Your Element ---\n");
        for(int i=0; i<size; i++)
        {
            printf("a[%d] = ",i);
            scanf("%d",&arr[i]);
        }
        for(int i=0; i<size; i++)
        {
            count += arr[i];
        }
        printf("The Sum Of An Array Element is : %d",count);
        printf("\n\n");


        //Question-2

        char str[100];
        printf("Enter Any String : ");
        scanf("%s",&str);
        printf("The Length Of String is : %d",str_length(str));

        return 0;
    }