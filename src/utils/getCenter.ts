import getCoordinates from "@/utils/getCoordinates";

export default function getCenter(element: DOMRect) {

    const x = element.height / 2 ?? 0
    const y = element.width / 2 ?? 0

    return {
        ...getCoordinates(x, y)
    }
}