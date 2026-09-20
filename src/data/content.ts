export type Resource = {
  title: string;
  description: string;
  category: string;
  format: string;
  accent: "lavender" | "rose" | "plum";
  href: string;
  filename: string;
};

export type Program = {
  title: string;
  description: string;
  date: string;
  price: string;
  status: "Free Sessions" | "Upcoming" | "Ongoing";
  ctaLabel: string;
  href: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  context: string;
  quote: string;
};

export const resources: Resource[] = [
  {
    title: "Know Yourself",
    description: "A reflective guide for noticing your patterns, emotional needs, and inner parenting landscape.",
    category: "Self-awareness",
    format: "8-page guide",
    accent: "lavender",
    href: "/pdfs/know-yourself.pdf",
    filename: "know-yourself.pdf",
  },
  {
    title: "Know Your Child",
    description: "A gentle resource for understanding your child's needs, temperament, and behaviour with more clarity.",
    category: "Child development",
    format: "Reflection workbook",
    accent: "rose",
    href: "/pdfs/know-your-child.pdf",
    filename: "know-your-child.pdf",
  },
  {
    title: "Connection",
    description: "Practical prompts for building emotional safety and reconnecting through everyday moments.",
    category: "Connection",
    format: "Conversation guide",
    accent: "plum",
    href: "/pdfs/connection.pdf",
    filename: "connection.pdf",
  },
  {
    title: "I Yelled Again",
    description: "A compassionate reset for repairing after anger and understanding what happened beneath the reaction.",
    category: "Repair",
    format: "Reflection guide",
    accent: "lavender",
    href: "/pdfs/i-yelled-again.pdf",
    filename: "i-yelled-again.pdf",
  },
  {
    title: "Grow as a Family",
    description: "A simple guide for nurturing family connection, shared growth, and calmer rhythms at home.",
    category: "Family growth",
    format: "Practice guide",
    accent: "rose",
    href: "/pdfs/grow-as-a-family.pdf",
    filename: "grow-as-a-family.pdf",
  },
];

export const programs: Program[] = [
  {
    title: "Mindful Parenting: From Self To Child",
    description: "8-weeks group coaching journey for mothers who want to parent with more calm, connection, and intention.",
    date: "New cohort · 17th Oct 2026",
    price: "10,000 PKR",
    status: "Upcoming",
    ctaLabel: "Join the interest list",
    href: "#contact",
    featured: true,
  },
  {
    title: "1:1 Parenting Coaching",
    description: "60-minute personalised guidance for mothers who want a private space to understand what is happening beneath the behaviour.",
    date: "Limited monthly spaces",
    price: "3,000 PKR",
    status: "Ongoing",
    ctaLabel: "Ask about coaching",
    href: "#contact",
  },
  {
    title: "Self-Awareness",
    description: "A practical live session on responding with more steadiness when family life feels emotionally charged.",
    date: "Details available soon",
    price: "Free",
    status: "Free Sessions",
    ctaLabel: "Reserve your place",
    href: "#contact",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Narjis",
    context: "Mother of three",
    quote:
      "Alizah’s sessions gave me clarity, hope, and strength in my motherhood journey. I learned to understand my children’s behaviour with a more positive perspective and build a stronger connection with them according to their age and emotional needs. Her guidance also helped me value and care for myself as a mother.",
  },
  {
    name: "Fizza",
    context: "Mother of two",
    quote:
      "This experience came at a time when I was losing confidence as a mother and feeling very hard on myself. Alizah helped me see simple but important things that I was unable to connect on my own. Her guidance felt deeply soothing and gave me hope that with practice, I can become a calmer mother.I feel grateful to have learned through her knowledge, warmth, and guidance. It helped me understand myself better and move towards becoming a more connected parent.",
  },
  {
    name: "Marzia",
    context: "mother of one",
    quote:
      "When I first heard about self-compassion, I was honestly a little reluctant. I thought it was a “nice extra” and that I should first focus on the real parenting struggles: anger, tantrums, patience, and becoming the kind of mother I wanted to be. But Alizah helped me understand that self-compassion is actually at the base of all of this. It is not about letting ourselves off the hook, but about being kind enough to look honestly at our behaviour and take responsibility. I also loved how she connected this with our relationship with Allah. The biggest practical difference I felt was that I became genuinely calmer in situations that would have put me into crisis before.",
  },
];
