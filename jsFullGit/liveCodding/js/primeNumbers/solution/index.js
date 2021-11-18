function factorise(numm)                      // To calculate the prime factors of a number
{
 var newnum = numm;                        // Initialise
 var newtext = "";
 var checker = 2;                          // First possible factor to check

 while (checker*checker <= newnum)         // See if it is worth looking further for factors 
    {      
     if (newnum % checker == 0)            // If the possible factor is indeed a factor...
        { 
         newtext = newtext + checker;      // ...then record the factor
         newnum = newnum/checker;          //    and divide by it
         if (newnum != 1)                  //    then check whether it is not last...
            {
             newtext = newtext + ".";      //    ...and if so prepare for the next
            }
        }
     else                                  // otherwise...
        {
         checker++;                        // try the next possible factor
        }
    }
 if (newnum != 1)                          // If there is anything left at the end...
    {                                      // ...this must be the last prime factor
     newtext = newtext + newnum;           //    so it too should be recorded
    }
 if (newtext == "" + numm)                 // If the only prime factor is the original...
    {
     newtext = "Prime: " + newtext;        // ...then note that it must have been prime.
    }

 return newtext;                           // Return the prime factors
}