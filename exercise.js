//solution goes here....
const bottun = document.querySelector("#add-btn");
// bottun.addEventListener("click", function(e){
        
        
        //         e.preventDefault();
        //         if(!this.value) return
        //         const newItem = document.createElement('li')
        //         const inputBtn = document.querySelector("#add-input").value;
        
        //         newItem.innerHTML = inputBtn;
        //         list.appendChild(newItem);
        //         this.value = "";
        
        // })
        
const inputBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list");
const inputField = document.querySelector("#add-input");
const form = document.querySelector("#add");

form.addEventListener("submit", function(e){
       
                e.preventDefault();
                const newList = document.createElement('li')
                list.appendChild(newList);

                //input field
                const p1 = document.createElement("p");
                const input = inputField.value;
                p1.innerHTML = input;
                newList.appendChild(p1);
                
                //maru batu field
                const p2 = document.createElement("p");
                
                //maru
                const i1 = document.createElement("i");
                i1.className="fa fa-pencil-square-o";
                
                //batu
                const i2 = document.createElement("i");
                i2.className="fa fa-times";
                console.log("iwatani", i1);
                p2.appendChild(i1);
                p2.appendChild(i2);
                newList.appendChild(p2);
                
                inputField.value = "";    

})