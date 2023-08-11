// // একটা বাক্যে কয়টা vawel আছে তা বের করো
 function sentence (vowel){
    const array=['a','e','i','o','u']
    let countVowel=0;
    for(i=0; i<vowel.length;i++){
      const word= vowel[i].toLowerCase();
          if (array.includes(word)) {
 countVowel++; }
   }
   return countVowel;

    if ( vowel.length !== array){
 return "its not a vowel"
    }
    else{
      return array;
   }
 }
 const inSentence= "i am not a good boy but try to hardly"
const totalOfVowel=sentence(inSentence);
console.log(totalOfVowel);

// .একটি বাক্যের মধ্যে যেসব অক্ষর একবার এর চাইতে বেশি সেগুলো একবার রেখে অন্য গুলো সরিয়ে দিবে। 
function inputSentence(sameLetter){
   let letters =[]
   for(let i=0; i<sameLetter.length;i++ ){
    let letter =sameLetter[i];
    if( letters.includes(letter)===false ){
      letters.push(letter)
    } 
   }
   return letters;
}
const result = "i am not a good boy but try to hardly"
const totalResult= inputSentence(result)
console.log(totalResult);