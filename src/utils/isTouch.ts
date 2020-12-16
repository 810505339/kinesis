export default function isTouch() {
    try {
        return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    } catch (e) {
        return false
    }
}