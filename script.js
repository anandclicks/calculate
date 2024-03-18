let inputValue = document.getElementById("inputValue")
let outputValue = document.getElementById("outputValue")
let NostroFixedVal = document.querySelector(".NostroFixedVal")
let totleFee = document.getElementById("totleFee")
let toSelect = document.getElementById("toSelect")
let fromSelect = document.getElementById("fromSelect")
let fromFlag = document.getElementById("fromFlag")
let toFlag = document.getElementById("toFlag")
let transfarAmount = document.querySelector(".transfarAmount")
let usd = "83.54"
let aud = "54.44"
let ca = "61.26"
let nz = "50.50"
let eur = "90.27"
let NostroFixed = "1500"
let GST = '18%'
let ServiceChargeFixed = "250.54"
let convertedAmount = ""

console.log(inputValue)


const flagChange = ()=> {
    fromSelect.addEventListener("change",(e)=> {
       let newFlagUrl =  e.target.value
       fromFlag.src =`https://flagsapi.com/${newFlagUrl}/flat/64.png`
    })
    toSelect.addEventListener("change",(e)=> {
        let newFlagUrl =  e.target.value
        toFlag.src =`https://flagsapi.com/${newFlagUrl}/flat/64.png`
     })
}
flagChange()
console.log(fromSelect.value)

const curruncyChange = ()=> {
    inputValue.addEventListener("input",()=> {
        let inputValForConvert = inputValue.value
       inputValForConvert = ( inputValForConvert - NostroFixed -ServiceChargeFixed)
       transfarAmount.textContent = inputValForConvert
    //    for usd 
        if(toSelect.value == "US") {
            outputValue.value = (inputValForConvert/usd).toFixed(3)
            console.log(outputValue.value)
        }
        // for usa 
        else if (toSelect.value == "AU") {
            outputValue.value = (inputValForConvert/aud).toFixed(3)
            console.log(outputValue.value)
        }
        // for ca 
        else if (toSelect.value == "CA") {
            outputValue.value = (inputValForConvert/ca).toFixed(3)
            console.log(outputValue.value)
        }
        // for nz 
        else if (toSelect.value == "NZ") {
            outputValue.value = (inputValForConvert/nz).toFixed(3)
            console.log(outputValue.value)
        }
        else {
            outputValue.value = (inputValForConvert/eur).toFixed(3)
            console.log(outputValue.value)
        }
    })
    
}
curruncyChange()

toSelect.addEventListener("change", ()=> {
    let inputValForConvert = inputValue.value
    if(toSelect.value == "US") {
        outputValue.value = (inputValForConvert/usd).toFixed(3)
        console.log(outputValue.value)
    }
    // for usa 
    else if (toSelect.value == "AU") {
        outputValue.value = (inputValForConvert/aud).toFixed(3)
        console.log(outputValue.value)
    }
    // for ca 
    else if (toSelect.value == "CA") {
        outputValue.value = (inputValForConvert/ca).toFixed(3)
        console.log(outputValue.value)
    }
    // for nz 
    else if (toSelect.value == "NZ") {
        outputValue.value = (inputValForConvert/nz).toFixed(3)
        console.log(outputValue.value)
    }
    else {
        outputValue.value = (inputValForConvert/eur).toFixed(3)
        console.log(outputValue.value)
    }
})