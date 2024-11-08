// PDF.js variables
const url = '.Naruto The Movie Book.pdf';
let pdfDoc = null,
    scale = 1.5;

// Load the PDF document
pdfjsLib.getDocument(url).promise.then(pdf => {
    pdfDoc = pdf;

    // Render all pages
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        renderPage(pageNum);
    }
});

// Render a specific page
function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: scale });
        
        // Create a new canvas for each page
        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-canvas';
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Create a wrapper div for each page to center it
        const pageDiv = document.createElement('div');
        pageDiv.className = 'pdf-page';
        pageDiv.appendChild(canvas);
        document.getElementById('pdf-reader').appendChild(pageDiv);

        // Render the page into the canvas context
        const context = canvas.getContext('2d');
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}