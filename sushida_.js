var aout_keylist = [
    "33",
    "63",
    "44",
    "188",
    "45",
    "43",
    "191",
    "189",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "229"
]
function sendKey(key) {
    const event = new KeyboardEvent('keypress', { charCode: key })
    document.dispatchEvent(event)
}
function aout_type() {
    aout_keylist.forEach((key) => {
        sendKey(key)
    }
    )
}
setInterval(()=>{
    aout_type()
},25)
