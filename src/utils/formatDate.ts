export function formatDate(date: string): string {
    console.log('first')
  return new Date(date).toISOString().split("T")[0];
}