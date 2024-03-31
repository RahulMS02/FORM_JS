       document.getElementById('form').addEventListener('submit',callBack);

        function callBack(event){
            const inputFname=document.getElementById('fname').value;
            const inputLname=document.getElementById('lname').value;
            const inputEmail=document.getElementById('email').value;
            const inputAge=document.getElementById('age').value;
            const inputGender=document.querySelector('input[name="gender"]:checked');
            check(inputGender,event);
            const inputCgpa=document.getElementById('cgpa').value;
            const inputSkills=document.querySelectorAll('input[name="skills"]:checked');
           // event.preventDefault();
            sessionStorage.setItem('inputFname', inputFname);                                                    
            sessionStorage.setItem('inputLname',inputLname);
            sessionStorage.setItem('inputAge',inputAge);
            sessionStorage.setItem('inputEmail',inputEmail);
            sessionStorage.setItem('inputGender',inputGender.value);
            sessionStorage.setItem('inputCgpa',inputCgpa);
            if(inputSkills.length!==0){
            const arr=[];
            inputSkills.forEach(function(inputSkill)
            {
                arr.push(inputSkill.value);
            });
            sessionStorage.setItem('inputSkills',JSON.stringify(arr));  }
            else{
                
            }   
            
        }
        function check(inputGender,event){
            if (!inputGender) {
                var confirmed=alert("You haven't selected a gender.Select a gender");
                if(confirmed)
                {
                    event.preventDefault();
                }
            }
        }