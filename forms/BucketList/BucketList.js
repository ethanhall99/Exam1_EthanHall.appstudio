// Bucket List

let bucketList = []

let listYN = confirm("Click OK to add item. Click Cancel to see bucket list.")

if (listYN === false) {
    console.log(bucketList)
} else {
    while (listYN === true) {
        let newItem = ''
        newItem = prompt("Enter Bucket List Item:")
        bucketList.push(newItem)
        listYN = confirm("Click OK to add another item. Click Cancel to see bucket list.")
    }
    console.log(bucketList)
}