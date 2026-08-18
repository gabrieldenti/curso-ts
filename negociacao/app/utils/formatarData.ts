export default function formatarData(data: Date): string{
    return data.toLocaleDateString('pt-BR', {
        "year": "numeric",
        "month": "2-digit",
        "day": "2-digit",
    })
}