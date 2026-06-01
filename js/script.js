function randomEdition() {

    const editions = [

        "editions/Apr2023.pdf",
        "editions/May2023.pdf",
        "editions/Jul2023.pdf",
        "editions/Sep2023.pdf",
        "editions/Oct2023.pdf",
        "editions/Nov2023.pdf",

        "editions/Jun2024.pdf",
        "editions/Jul2024.pdf",

        "editions/Jan2025.pdf",

        "editions/Mar2026.pdf",
        "editions/Jun2026.pdf"

    ];

    const random =
        editions[Math.floor(Math.random() * editions.length)];

    window.open(random, "_blank");
}