let stdin = process.openStdin()

stdin.addListener("data", (d) => {
    let str =  d.toString().trim()
    console.log('Palindrome: ' + palindrome(str))
    stdin.end()
 });