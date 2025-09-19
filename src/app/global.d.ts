export {}

declare global {
    interface Window {
        fullpage_api?: {
            moveSectionUp: () => void
            moveSectionDown: () => void
            moveTo: (section: number, slide?: number) => void
        }
    }
}
