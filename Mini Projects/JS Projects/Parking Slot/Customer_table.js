var TABLE = document.createElement("table")

TABLE.setAttribute("id", "hello")

document.body.append(TABLE)
TABLE.style.border = "2px solid black"
TABLE.style.borderCollapse = "Collapse"
TABLE.style.fontSize = "20px"
TABLE.style.position = "absolute"
TABLE.style.left = "35%"
TABLE.style.backgroundColor = "white"

let TABLEHEAD = document.createElement("thead")

TABLE.appendChild(TABLEHEAD)

let TABLEHEADROW = document.createElement("tr")

TABLEHEAD.appendChild(TABLEHEADROW)
TABLEHEADROW.style.border = "2px solid black"

let TABLEBODY = document.createElement("tbody")

TABLE.appendChild(TABLEBODY)

console.log(TABLE)

// let rowlength  = Number(prompt("Enter How Many Rows you Want:"))

// let condition = true

// while(condition)
// {
//     if(isNaN(rowlength))
//     {
//     alert("Give Valid Input.........")
//     rowlength      = Number(prompt("Enter How Many Rows you Want:"))
//     }
//     else if(rowlength == false)
//     {
//         alert("Operation Cancelled........") 
//         condition = false
//     }
//     else
//     {
//         condition = false
//     }
// }

let thone = document.createElement("th")
thone.textContent = "S.No"
thone.style.border = "2px solid black"
thone.style.padding = "20px"

let thtwo = document.createElement("th")
thtwo.textContent = "Customer Name"
thtwo.style.border = "2px solid black"
thtwo.style.padding = "20px"

let ththree = document.createElement("th")
ththree.textContent = "Bike Number"
ththree.style.border = "2px solid black"
ththree.style.padding = "20px"

let thfour = document.createElement("th")
thfour.textContent = "Check-In"
thfour.style.border = "2px solid black"
thfour.style.padding = "20px"

let thfive = document.createElement("th")
thfive.textContent = "Check-Out"
thfive.style.border = "2px solid black"
thfive.style.padding = "20px"

let thsix = document.createElement("th")
thsix.textContent = "Updation"
thsix.style.border = "2px solid black"
thsix.style.padding = "20px"
thsix.style.width = "150px"

TABLEHEADROW.appendChild(thone)
TABLEHEADROW.appendChild(thtwo)
TABLEHEADROW.appendChild(ththree)
TABLEHEADROW.appendChild(thfour)
TABLEHEADROW.appendChild(thfive)
TABLEHEADROW.appendChild(thsix)

TABLE.style.display = "none"

x =0
y =0
cn =0
bn =0
ch_in =0
ch_out =0
e =0
b =0

row =0


function addtable()
{
c = document.getElementById("cn").value
b = document.getElementById("bn").value
ci = document.getElementById("ci").value
co = document.getElementById("co").value

    if(c == "" || c == null)
    {
        alert("Don't leave Customer Name field as Empty...")
    }
    else if(c == Number(c))
    {
        alert("Don't use Numbers......")
    }
    else if(b == "" || b == null){
        alert("Don't leave Bike Number field as Empty...")
    }
    else if(ci == "" || ci == null){
        alert("Don't leave Check-In field as Empty...")
    }
    else if(co == "" || co == null){
        alert("Don't leave Check-Out field as Empty...")
    }
    else{

        var div1 = document.getElementById("div1")
        div1.style.top = "0px"
        div1.style.left = "0px"
        TABLE.style.display = "block"

       x = x+1
       y = y+1
       cn = cn+1
       e = e+1
       row = row+1
       b= b+1

    for(i = 0; i<1; i++)
    {
        var  tablerow = document.createElement("tr")
        tablerow.setAttribute("id", `row ${row}`)
        TABLEBODY.appendChild(tablerow)
        tablerow.style.border = "1px solid black"
          
        for(j = 0; j<7; j++)
        {
            var tabledata
    
            if(j == 0)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `${y}`)
                tablerow.appendChild(tabledata)

                let serialno = x;
                tabledata.textContent = serialno;
            }
            else if(j == 1)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `cn ${cn}`)
                tablerow.appendChild(tabledata)
    
                var c = document.getElementById("cn").value
                tabledata.textContent = c;
    
                let cc = document.getElementById("cn")
                cc.value = ""
                
            }
            else if(j == 2)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `bn ${bn}`)
                tablerow.appendChild(tabledata)
    
                var b = document.getElementById("bn").value
                tabledata.textContent = b
    
                let bb = document.getElementById("bn")
                bb.value = ""
    
            }
            else if(j == 3)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `ch_in ${ch_in}`)
                tablerow.appendChild(tabledata)
    
                var ci = document.getElementById("ci").value
                tabledata.textContent = ci
    
                let cii = document.getElementById("ci")
                cii.value = ""
                
            }
            else if(j == 4)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `ch_out ${ch_out}`)
                tablerow.appendChild(tabledata)
    
                var co = document.getElementById("co").value
                tabledata.textContent = co
    
                let coo = document.getElementById("co")
                coo.value = ""
            }
            else if(j == 5)
            {
                tabledata = document.createElement("td")
                tabledata.setAttribute("id", `b ${b}`)
                tablerow.appendChild(tabledata)
    

                // var e = document.createElement("button")
                // e.setAttribute("id", `e ${e}`)
                // e.textContent = "Edit"
                // tabledata.appendChild(e)

                var d = document.createElement("button")
                d.textContent = "Delete"
                d.style.marginLeft = "5px"
                d.style.padding = "8px"
                d.style.paddingLeft = "20px" 
                d.style.paddingRight = "20px" 
                d.style.backgroundColor = "black"
                d.style.color = "white"
                d.style.borderStyle = "none"
                d.style.borderRadius = "2pc"

                tabledata.appendChild(d)

            }
    
                tabledata.style.textAlign = "center"
                tabledata.style.border = "2px solid black"
                tabledata.style.padding = "15px"
                
        }
    }
    }

    d.addEventListener("click", ()=>{
        tablerow.remove();  
        x--

        if(x == 0)
        {
            TABLE.style.display = "none"
            div1.style.top = "120px"
            div1.style.left ="480px"
        }

        let set = document.getElementById(`${y}`)
        set.textContent = x

        })

    // e.addEventListener("click", ()=>{

    //     let xx = document.getElementById(`row ${row}`)
    //     // row--
    //     xx.setAttribute("contenteditable","true")

    //     e.remove();
    //     d.remove();

    //     var ok = document.createElement("button")
       
    //     ok.textContent = "ok"
    //     ok.style.padding = "15px"
    //     TABLE.appendChild(ok)


    // })    
   
}







function deletetable()
{
   let Remove = document.getElementById("hello")

   Remove.remove();

   div1.style.top = "120px"
   div1.style.left ="480px"
}