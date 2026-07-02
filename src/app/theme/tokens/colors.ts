export const colors = {
  primary: {
    main: "#0356FC",
  },

  background: {
    default: "#FFFFFF",
  },

  sidebar: {
    bg: "#FFFFFF",
    text: "#4B5563",
    textActive: "#0356FC",
    hover: "#F3F6FF",
    activeBg: "#EAF1FF",
  },

  status: {
    open: {
      bg: "#EAF1FF",
      text: "#0356FC",
      border: "#B8D0FF",
    },

    inProgress: {
      bg: "#FFF4E5",
      text: "#ED6C02",
      border: "#FFD8A8",
    },

    done: {
      bg: "#E8F5E9",
      text: "#2E7D32",
      border: "#A5D6A7",
    },
  },

  priority: {
    low: {
      bg: "#F3F4F6",
      text: "#6B7280",
      border: "#D1D5DB",
    },

    medium: {
      bg: "#FFF4E5",
      text: "#ED6C02",
      border: "#FFD8A8",
    },

    high: {
      bg: "#FDECEC",
      text: "#D32F2F",
      border: "#F5B5B5",
    },

    critical: {
      bg: "#FDECEC",
      text: "#D32F2F",
      border: "#F5B5B5",
    },
  },
} as const;
