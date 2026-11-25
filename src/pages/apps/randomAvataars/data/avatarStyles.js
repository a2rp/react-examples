const styleLoaders = {
    adventurer: () => import("@dicebear/adventurer"),
    "adventurer-neutral": () => import("@dicebear/adventurer-neutral"),
    avataaars: () => import("@dicebear/avataaars"),
    "avataaars-neutral": () => import("@dicebear/avataaars-neutral"),
    "big-ears": () => import("@dicebear/big-ears"),
    "big-ears-neutral": () => import("@dicebear/big-ears-neutral"),
    "big-smile": () => import("@dicebear/big-smile"),
    bottts: () => import("@dicebear/bottts"),
    "bottts-neutral": () => import("@dicebear/bottts-neutral"),
    croodles: () => import("@dicebear/croodles"),
    "croodles-neutral": () => import("@dicebear/croodles-neutral"),
    "fun-emoji": () => import("@dicebear/fun-emoji"),
    icons: () => import("@dicebear/icons"),
    identicon: () => import("@dicebear/identicon"),
    initials: () => import("@dicebear/initials"),
    lorelei: () => import("@dicebear/lorelei"),
    "lorelei-neutral": () => import("@dicebear/lorelei-neutral"),
    micah: () => import("@dicebear/micah"),
    miniavs: () => import("@dicebear/miniavs"),
    notionists: () => import("@dicebear/notionists"),
    "notionists-neutral": () => import("@dicebear/notionists-neutral"),
    "open-peeps": () => import("@dicebear/open-peeps"),
    personas: () => import("@dicebear/personas"),
    "pixel-art": () => import("@dicebear/pixel-art"),
    "pixel-art-neutral": () => import("@dicebear/pixel-art-neutral"),
    rings: () => import("@dicebear/rings"),
    shapes: () => import("@dicebear/shapes"),
    thumbs: () => import("@dicebear/thumbs"),
};

export const AVATAR_STYLES = [
    { id: "adventurer", name: "Adventurer" },
    { id: "adventurer-neutral", name: "Adventurer Neutral" },
    { id: "avataaars", name: "Avataaars" },
    { id: "avataaars-neutral", name: "Avataaars Neutral" },
    { id: "big-ears", name: "Big Ears" },
    { id: "big-ears-neutral", name: "Big Ears Neutral" },
    { id: "big-smile", name: "Big Smile" },
    { id: "bottts", name: "Bottts" },
    { id: "bottts-neutral", name: "Bottts Neutral" },
    { id: "croodles", name: "Croodles" },
    { id: "croodles-neutral", name: "Croodles Neutral" },
    { id: "fun-emoji", name: "Fun Emoji" },
    { id: "icons", name: "Icons" },
    { id: "identicon", name: "Identicon" },
    { id: "initials", name: "Initials" },
    { id: "lorelei", name: "Lorelei" },
    { id: "lorelei-neutral", name: "Lorelei Neutral" },
    { id: "micah", name: "Micah" },
    { id: "miniavs", name: "Miniavs" },
    { id: "notionists", name: "Notionists" },
    { id: "notionists-neutral", name: "Notionists Neutral" },
    { id: "open-peeps", name: "Open Peeps" },
    { id: "personas", name: "Personas" },
    { id: "pixel-art", name: "Pixel Art" },
    { id: "pixel-art-neutral", name: "Pixel Art Neutral" },
    { id: "rings", name: "Rings" },
    { id: "shapes", name: "Shapes" },
    { id: "thumbs", name: "Thumbs" },
];

const styleCache = new Map();

export function getAvatarStyle(styleId) {
    return AVATAR_STYLES.find((style) => style.id === styleId) ?? AVATAR_STYLES[0];
}

export async function loadAvatarStyle(styleId) {
    const style = getAvatarStyle(styleId);

    if (!styleCache.has(style.id)) {
        styleCache.set(style.id, styleLoaders[style.id]());
    }

    try {
        return await styleCache.get(style.id);
    } catch (error) {
        styleCache.delete(style.id);
        throw error;
    }
}
