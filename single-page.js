const url = 'resume.pdf';

const canvas = document.getElementById('resume-123');
const ctx = canvas.getContext('2d');
const scale = 1.5;  // Adjust the scale for the desired image size

// Load the PDF and render the first page
pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    pdfDoc.getPage(1).then(page => {
        const viewport = page.getViewport({ scale });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderCtx = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        page.render(renderCtx);
    });
});