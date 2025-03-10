let dataArray = []; // ตัวแปรเก็บข้อมูล

function addData() {
    let userInput = prompt("กรุณากรอกข้อมูล:");
    if (userInput !== null && userInput.trim() !== "") {
        dataArray.push(userInput); // เพิ่มข้อมูลลงใน array
        displayData(); // เรียกฟังก์ชันแสดงผล
    }
}

function displayData() {

    let dataList = document.getElementById("dataList");
    dataList.innerHTML = ""; // เคลียร์รายการเดิมก่อนแสดงใหม่
    dataArray.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        dataList.appendChild(listItem);
        
    });
}