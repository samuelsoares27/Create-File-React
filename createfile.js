let output = wrongText;
const blob = new Blob([output]);
const fileDownloadUrl = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = fileDownloadUrl;
link.setAttribute(
  'download',
   `FileName.txt`,
);
// Append to html link element page
document.body.appendChild(link);

// Start download
link.click();

// Clean up and remove the link
link.parentNode.removeChild(link);
