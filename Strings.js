let str = 'Kyeyune';
alert(str.length); //Gives the length of the string
alert(str.charAt(4)); //Counting positions starts from 0
alert(str[4]); //returns the character in the fourth position of the string
alert(str[str.length-1]); //returns the last character of the string
alert(str.charAt(10));
alert(str[100]);

//we can iterate over characters using the for...of
for(let char of str){
    alert(char);
}