export const GoogleForm = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeSE0QrDkwH7kNz4SAOpoquPgwjb7fWgT6CeS2aPxEePUSlSg/viewform?embedded=true";
    const formStyle = {
        width: '100%', // You can set this to a specific width if you prefer
        height: '700px', // Adjust the height as needed
        border: '0', // This replaces frameBorder
        marginHeight: '0', // This replaces marginHeight
        marginWidth: '0', // This replaces marginWidth
    };

    return (
        <iframe src={formUrl}
                style={formStyle}
                title="Google Form">Loading…</iframe> // "Loading…" will display while the iframe is loading
    );
};
