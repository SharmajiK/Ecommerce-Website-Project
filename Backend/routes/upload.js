router.post('/upload-multiple', upload.array('images', 5), (req, res) => {
    console.log('Files uploaded:', req.files); // Logs file information
    const filePaths = req.files.map(file => file.path); // Collect file paths
    res.status(200).json({
        message: 'Files uploaded successfully!',
        files: filePaths // Send the file paths to the client
    });
});

module.exports = router;
