/*
 Assignment Name: This is an JavaScript file for the Billing Page in my final project website: Absolute Glam
Name: Arshiya Dharwadkar
Course: CMP 244- 86152
Professor: Michael Sidaras Tirrito
Date: 12/17/2022

*/

alert("Absolute Glam welcomes you to the billing page!");

/* Initializind All Variables and Arrays */

var hasId = false; //Boolean flag to determine ID.

var proves18 = false; //Boolean flag to determine age for alcholic and tobacco overseas.

var proves21 = false; //Boolean flag to determine age for alcholic and tobacco in the US.

var money = new Array(7); //Array to store 7 values: alcoholPrice, tobaccoPrice, taxRate, subTotal, taxAmount, grandTotal, collectedAmount.

for (i = 0; i < 7; i++)
     
     {
         money[i] = 0.0;
     } //Loop defaults all 7 positions in the money array to 0.0.

/* Displaying Welcome Message */
document.write("<h4>Welcome to our website!</h4>");
document.write("<h4>We Sell the Finest Makeup products</h4>");

for(i = 0; i < 100; i++)
    
    {
        document.write("-");
    }
document.write("<br><br>");

money[2] = parseFloat(prompt("Please Input the Tax Rate in your State as a decimal number (i.e. 0.08 for 8%)", 0.0));
    
alert("You have set up this program with a tax rate of: " + (money[2] * 100) + "%");  

/* Collecting ID from the Customer */
hasId = prompt("Do you have an ID? (yes/no)");

if(hasId == 'yes' || hasId == 'YES' || hasId == "Yes" || hasId == "yES")
    
    {
        hasId = true;
    }
else
    
    {
        hasId = false;
    }

/* Analyzing the state of the hasId boolean flag to determine if we should continue or deny the sale of age-restricted products due to not having proof of age on an ID. */

if (hasId)
    
    {
        /* Determining which age-restricted products the ID proves allowable */
        proves21 = prompt("Does your ID prove you are old enough to make an online purchase? (yes/no)", "No");
        
        if (proves21 == 'yes' || proves21 == 'YES' || proves21 == "Yes" || proves21 == "yES")
            
            {
                proves21 = true;
            } //End of true path for proves21
            
        else
            {
                proves21 = false;
                
    
            } //End of false path for proves21
        
        if (proves21)
            
            {
                money[0] = parseFloat(prompt("Please Enter the Price of the Makeup products: $", "0.0"));
                money[1] = parseFloat(prompt("Please Enter the Price of any additional purchases: $", "0.0"));
                money[3] += money[0] + money[1]; //Calculating subtotal from the array.
                money[4] =  money[3] * money[2]; //Calculating the sales tax.
                money[5] =  money[3] + money[4]; //Calculating the grandTotal.
                money[6] =  money[5];
                
                /* Displaying the results 
                
                document.write("<div class='box'><h3>You may purchase Makeup!</h3>");*/
                document.write("<h4><span class= \"name\"> Makeup Price: </span>$" + money[0].toFixed(2) + "</h4>");
                document.write("<h4><span class= \"name\"> Additional Items Price: </span>$" + money[1].toFixed(2) + "</h4>");
                document.write("<h4><span class= \"name\"> Subtotal: </span>$" + money[3].toFixed(2) + "</h4>");
                document.write("<h4><span class= \"name\"> Sales Tax: </span>$" + money[4].toFixed(2) + "</h4>");
                document.write("<h4><span class= \"name\"> Grand Total: </span>$" + money[5].toFixed(2) + "</h4>");
                document.write("<h4><span class= \"name\"> We have collected: </span>$" + money[6].toFixed(2) + "</h4></div>");
                    
            }//End of true path proves21 boolean flag, which sells the alcoholic products
                
        else if (proves18)
            {
                money[1] = parseFloat(prompt("Please Enter the Price of any additional purchases: $", "0.0"));
                money[3] += money[1]; //Calculating subtotal from the array.
                money[4] =  money[3] * money[2]; //Calculating the sales tax.
                money[5] =  money[3] + money[4]; //Calculating the grandTotal.
                money[6] =  money[5];
            
        
        /* Displaying the results */
                
                document.write("<div class='box'><h3>You are not old enough to make an online purchase!</h3>");
                document.write("<h3><span class= \"name\"> Additional purchases: </span>$" + money[1].toFixed(2) + "</h3>");
                document.write("<h3><span class= \"name\"> Subtotal: </span>$" + money[3].toFixed(2) + "</h3>");
                document.write("<h3><span class= \"name\"> Sales Tax: </span>$" + money[4].toFixed(2) + "</h3>");
                document.write("<h3><span class= \"name\"> Grand Total: </span>$" + money[5].toFixed(2) + "</h3>");
                document.write("<h3><span class= \"name\"> We have collected: </span>$" + money[6].toFixed(2) + "</h3></div>");
                
            }//End of true path proves18 boolean flag, which sells the tobacco products    
       else
           
           {
               document.write("<div class = \"box\"><h3> Sorry! You are not old enough to make online purchase.</h3></div>");
               
           }//End of false path proves18 boolean flag, which denies sales of alcohol and the tobacco products due to being underage.
        
    } //End of true path for hasId

else
    {
            document.write("<div class = \"box\"><h3>Sorry! You have not presented ID. You cannot make any online purchase.</h3></div>");
    } //End of false path for hasId

