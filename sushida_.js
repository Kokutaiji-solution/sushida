var kashiwa_keys = [
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
function kashiwa() {
    kashiwa_keys.forEach((key) => {
        sendKey(key)
    }
    )
}
setInterval(()=>{
    kashiwa()
},25)