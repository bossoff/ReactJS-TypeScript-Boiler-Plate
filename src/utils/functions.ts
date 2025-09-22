export const useLocalStorage = {
  set: (key: string, data: unknown) => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  },

  get: (key: string) => {
    const data: unknown = JSON.parse(localStorage.getItem(key)!);

    if (!data) {
      return null;
    }
    return data;
  },

  remove: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export const formatNumber = (n: number, decimals: number) => {
  return (
    n &&
    Number(n)
      .toFixed(decimals || 0)
      .replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      })
  );
};

export const ucword = (str: string) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const toFormData = (object: { [x: string]: string | Blob }) => {
  const formData = new FormData();
  for (const key in object) {
    formData.append(key, object[key]);
  }
  return formData;
};

export const firstLetter = (letter: string) => {
  const str = letter;
  const res = str?.substring(0, 1);
  return res;
};

export const valueBaseFormat = (number: string) => {
  if (Number(number) >= 1_000 && Number(number) < 1_000_000) {
    return (
      (Number(number) / 1000).toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + "k"
    );
  } else if (Number(number) >= 1_000_000) {
    return (
      (Number(number) / 1_000_000).toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + "m"
    );
  } else {
    return Number(number).toLocaleString();
  }
};

export const generateSlug = (input: string): string => {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
