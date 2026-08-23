export default function formatarData(data) {
    return data.toLocaleDateString('pt-BR', {
        "year": "numeric",
        "month": "2-digit",
        "day": "2-digit",
    });
}
//# sourceMappingURL=formatarData.js.map