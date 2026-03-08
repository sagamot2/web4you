function openPopup() {
    const width = 500;
    const height = 600;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    window.open(
      'time.html',
      'popupWindow',
      `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`
    );
}
window.onload = function() {
    console.log("หน้าจีบสาวโหลดเสร็จแล้ว! สู้ๆ นะไอ้กัสส");
};