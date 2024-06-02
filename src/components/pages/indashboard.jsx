import React from "react";

const Header = () => {
    const headerStyle = {
        backgroundColor: "#4A90E2", // Background biru
        color: "white", // Teks putih
        textAlign: "center", // Teks di tengah
        padding: "20px", // Padding 20px
        borderRadius: "8px", // Membulatkan sudut
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
        marginBottom: "20px" // Margin bawah 20px
    };

    const titleStyle = {
        fontSize: "24px", // Ukuran font 24px
        fontWeight: "bold" // Tebal
    };

    return (
        <div style={headerStyle}>
            <h1 style={titleStyle}>APLIKASI PELAPORAN MITRA INDIHOME PLASA TONDANO</h1>
        </div>
    );
};

export default Header;
