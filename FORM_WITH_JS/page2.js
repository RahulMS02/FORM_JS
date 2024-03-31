const inputFname=sessionStorage.getItem('inputFname');
document.getElementById('inputFname').textContent=inputFname;
const inputLname=sessionStorage.getItem('inputLname');
document.getElementById('inputLname').textContent=inputLname;
const inputEmail=sessionStorage.getItem('inputEmail');
document.getElementById('inputEmail').textContent=inputEmail;
const inputAge=sessionStorage.getItem('inputAge');
document.getElementById('inputAge').textContent=inputAge;
const inputGender=sessionStorage.getItem('inputGender');
if(inputGender)
{
  document.getElementById('inputGender').innerHTML=inputGender; 
}
else  
{
  document.getElementById('inputGender').innerHTML = 'NO Gender Selected';
}
const inputCgpa=sessionStorage.getItem('inputCgpa');
document.getElementById('inputCgpa').textContent=inputCgpa;
var inputSkill=sessionStorage.getItem('inputSkills');
var arr=JSON.parse(inputSkill);
if(arr){
  document.getElementById('inputSkills').textContent = 'Skills:'  + arr.join(', ');
}
else
{
  document.getElementById('inputSkills').textContent = 'NO SKILLS';
}
