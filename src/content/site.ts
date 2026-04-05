export type LinkVariant = "primary" | "secondary" | "light" | "ghost";

export type ActionLink = {
  href: string;
  label: string;
  variant?: LinkVariant;
};

export type ImageAsset = {
  alt: string;
  src: string;
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/why-bobs-cove-matters", label: "Why Bob's Cove Matters" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export const siteContent = {
  siteName: "Regenerate Bob's Cove",
  siteDescription:
    "A community conservation initiative protecting birdlife and restoring habitat in Bob's Cove, New Zealand.",
  location: "Bob's Cove, New Zealand",
  navigation,
  footer: {
    summary:
      "A calm, community-first place to explain the work, share updates, and make participation easy as details are confirmed.",
    links: navigation,
    note: "Volunteer details, local contacts, and support links can be updated as the project confirms them.",
  },
  home: {
    hero: {
      eyebrow: "Community conservation in Bob's Cove",
      title: "Protecting birdlife and restoring the cove, together.",
      description:
        "Regenerate Bob's Cove is a practical local effort to care for the bush, shoreline, and birdlife around the cove through steady, community-led action.",
      primaryAction: {
        href: "/get-involved",
        label: "See how to help",
      },
      secondaryAction: {
        href: "#work",
        label: "Explore the work",
        variant: "secondary" as const,
      },
      image: {
        src: "/images/picnicpoint.jpg",
        alt: "Aerial view across the turquoise water and shoreline of Bob's Cove.",
      },
      focusAreas: [
        "Bird protection",
        "Trap lines and monitoring",
        "Neighbour-led care",
      ],
      brandPanel: {
        title: "From the bushline to the bay.",
        description:
          "The site should feel rooted in place: practical, welcoming, and led by the landscape as much as the copy.",
        logo: "/brand/RBCBOX.png",
        logoAlt: "Regenerate Bob's Cove logo.",
      },
      visuals: [
        {
          src: "/images/hero2.jpg",
          alt: "Wide view across Bob's Cove showing bush, water, and nearby homes.",
          caption: "A living cove with habitat, homes, and daily stewardship all close together.",
        },
        {
          src: "/images/jetty.JPG",
          alt: "Jetty reaching into the lake at Bob's Cove in soft evening light.",
          caption: "The shoreline is part of how people experience and care for the place.",
        },
      ],
    },
    why: {
      eyebrow: "Why it matters",
      title: "A cove where shoreline, forest, and community all meet.",
      description:
        "Bob's Cove matters as a place people know and use. That closeness makes restoration feel tangible, shared, and worth sustaining over time.",
      image: {
        src: "/images/coveview.jpg",
        alt: "Lake edge and forested hillside meeting at Bob's Cove.",
      },
      points: [
        {
          title: "A rare meeting of water, bush, and homes",
          description:
            "The cove brings together lake edge, regenerating habitat, walking routes, and nearby residents in one visible landscape.",
        },
        {
          title: "Birdlife is part of everyday experience",
          description:
            "When native birds return, the change is not abstract. It is heard, noticed, and shared by people who spend time here.",
        },
        {
          title: "Local care makes long work possible",
          description:
            "Steady practical effort, not distant promises, is what keeps restoration grounded and durable.",
        },
      ],
      note: "Healthy habitat here depends on regular local care, clear communication, and patience.",
    },
    birds: {
      eyebrow: "Birdlife",
      title: "Birds that make the work feel real.",
      description:
        "Native birdlife gives people a direct reason to care. The site can use familiar species to make conservation feel immediate and local.",
      species: [
        {
          name: "Tui",
          summary:
            "A strong ambassador for the cove's soundscape and a familiar sign that habitat quality matters.",
          note: "Seen as a flagship species for lively, healthy bush edges.",
          image: {
            src: "/images/tui.jpg",
            alt: "Tui perched among bright green leaves.",
          },
        },
        {
          name: "Bellbird",
          summary:
            "A native bird that helps connect people to the quieter, everyday experience of a recovering place.",
          note: "Works well in sections about listening for change, not just seeing it.",
          image: {
            src: "/images/bellbird.jpg",
            alt: "Bellbird perched on a branch with green foliage behind it.",
          },
        },
        {
          name: "Robin",
          summary:
            "An intimate, close-up species image that brings warmth and personality into the story of the work.",
          note: "Useful for updates, story previews, and welcoming first-time visitors.",
          image: {
            src: "/images/robin.JPEG",
            alt: "New Zealand robin standing upright on a branch.",
          },
        },
      ],
    },
    work: {
      eyebrow: "Practical work",
      title: "Practical work, shared locally.",
      description:
        "The conservation story should feel active and real: regular checks, walking routes, gear in the field, and people caring for the place over time.",
      features: [
        {
          kicker: "Field work",
          title: "Trap lines and practical protection",
          summary:
            "Routine checks, maintaining gear, and keeping practical systems working quietly in the background are a visible part of the effort.",
          image: {
            src: "/images/trap2.jpeg",
            alt: "Trap equipment sitting among native plants and undergrowth.",
          },
        },
        {
          kicker: "On the ground",
          title: "Monitoring, walking routes, and local stewardship",
          summary:
            "Observing changes, returning often, and making the work legible to neighbours helps conservation stay grounded in place.",
          image: {
            src: "/images/trap4.JPEG",
            alt: "Person carrying field gear while walking through grassy terrain near the cove.",
          },
        },
      ],
      emphasis: {
        title: "The work is bigger than one tool.",
        description:
          "A strong site should frame the project as a rhythm of practical tasks, local relationships, and long-term care rather than one-off interventions.",
        image: {
          src: "/images/picnicpoint.jpg",
          alt: "High view looking across the cove's bright water and bush-covered shoreline.",
        },
        principles: [
          {
            title: "Regular presence",
            description:
              "Returning often matters. It keeps the work visible, maintainable, and connected to real conditions on the ground.",
          },
          {
            title: "Welcoming entry points",
            description:
              "People should be able to imagine how they could join in, learn the basics, and build confidence over time.",
          },
          {
            title: "Place-led decisions",
            description:
              "The cove itself should guide the tone of the project: calm, observant, and led by what the landscape needs.",
          },
        ],
      },
    },
    landscape: {
      eyebrow: "Landscape",
      title: "Landscape is part of the story.",
      description:
        "The strongest moments on the site should come from photography that lets the place do the talking.",
      gallery: [
        {
          src: "/images/covesunrise.JPEG",
          alt: "Sunrise light over the hills and water at Bob's Cove.",
          caption: "Early light gives the cove a quiet, hopeful mood.",
          shape: "wide",
        },
        {
          src: "/images/jetty.JPG",
          alt: "Jetty extending into still water with hills in the distance.",
          caption: "The lake edge is where many people first connect with the place.",
          shape: "square",
        },
        {
          src: "/images/hero2.jpg",
          alt: "Wide scenic view of the cove and surrounding bush.",
          caption: "Broad landscape views help explain why the place matters.",
          shape: "tall",
        },
        {
          src: "/images/coveview.jpg",
          alt: "Turquoise shoreline below a steep bush-covered slope.",
          caption: "Water colour and bushline are key parts of the identity.",
          shape: "wide",
        },
      ],
    },
    join: {
      eyebrow: "Get involved",
      title: "There is a place for you in the work.",
      description:
        "Whether you live nearby or simply care about Bob's Cove, the project needs people who are willing to show up, learn, and stay connected.",
      actions: [
        {
          href: "/get-involved",
          label: "Volunteer",
          variant: "light" as const,
        },
        {
          href: "/contact",
          label: "Stay in touch",
          variant: "ghost" as const,
        },
      ],
      steps: [
        {
          title: "Join a local field day",
          description:
            "Use this space to share working bees, beginner-friendly volunteer days, and practical opportunities to help on site.",
        },
        {
          title: "Follow the project story",
          description:
            "Updates, photos, and short field notes can help people stay connected between hands-on days.",
        },
        {
          title: "Support the practical work",
          description:
            "Once support links are confirmed, this section is ready for low-friction ways to contribute time, tools, or funds.",
        },
      ],
    },
    stories: {
      eyebrow: "Stories",
      title: "A simple way to keep the project alive between field days.",
      description:
        "Storytelling does not need to be elaborate. Short updates, bird sightings, and field notes can keep the work visible and welcoming.",
      cards: [
        {
          meta: "Field note",
          title: "Trail notes from the bushline",
          summary:
            "Short reflections from track walks can help neighbours and supporters understand the seasonal rhythm of the place.",
          href: "/stories",
          image: {
            src: "/images/covesunrise.JPEG",
            alt: "Morning light over the water and hills at Bob's Cove.",
          },
        },
        {
          meta: "How it works",
          title: "Why routine checks matter",
          summary:
            "Practical explanations make the work easier to trust and easier for newcomers to imagine joining.",
          href: "/stories",
          image: {
            src: "/images/trap4.JPEG",
            alt: "Volunteer carrying field gear through grassland near the cove.",
          },
        },
        {
          meta: "Birdlife",
          title: "Moments that keep people involved",
          summary:
            "Bird photography and small signs of change are a natural fit for updates, social posts, and homepage previews.",
          href: "/stories",
          image: {
            src: "/images/robin.JPEG",
            alt: "New Zealand robin perched on a branch.",
          },
        },
      ],
    },
  },
  pages: {
    why: {
      eyebrow: "Why Bob's Cove matters",
      title: "Why this place is worth caring for, slowly and well.",
      description:
        "Bob's Cove brings together shoreline, bush, homes, and public access in one landscape. That closeness makes habitat care visible, shared, and worth doing carefully.",
      image: {
        src: "/images/hero2.jpg",
        alt: "Wide view of Bob's Cove showing the lake, bush, and nearby settlement.",
      },
      sections: [
        {
          title: "A place where edges meet",
          body: [
            "Bob's Cove is not a remote conservation story. It is a place where water, bush, tracks, homes, and visitors all sit close together.",
            "That mix gives the site a practical role: help people understand why habitat protection matters in a place they can see, hear, and revisit easily.",
          ],
        },
        {
          title: "Care feels real when it stays local",
          body: [
            "Field work, monitoring, and regular presence help conservation feel grounded rather than abstract.",
            "When the work is visible and welcoming, more people can understand how they might contribute over time.",
          ],
        },
        {
          title: "Recovery works on a long rhythm",
          body: [
            "This project does not need hype. It needs patient storytelling, repeat visits, and practical decisions shaped by the place itself.",
            "The goal of this page is to make that rhythm legible without overclaiming outcomes that have not been verified yet.",
          ],
        },
      ],
      cards: [
        {
          title: "Shoreline and bush",
          description:
            "The meeting of water and forest gives the cove a visual identity that should stay central to the site.",
          image: {
            src: "/images/coveview.jpg",
            alt: "Slope of native bush descending toward bright blue water.",
          },
        },
        {
          title: "Bird habitat",
          description:
            "Birdlife makes restoration tangible and helps connect ecological work to everyday local experience.",
          image: {
            src: "/images/tui.jpg",
            alt: "Tui resting on a branch framed by green leaves.",
          },
        },
        {
          title: "Shared stewardship",
          description:
            "People are part of the story here, so the site should always point back to practical ways of participating.",
          image: {
            src: "/images/trap4.JPEG",
            alt: "Volunteer with field gear standing in open grass with hills beyond.",
          },
        },
      ],
    },
    getInvolved: {
      eyebrow: "Get involved",
      title: "Ways to help, even while more project details are still being confirmed.",
      description:
        "This page creates clear space for volunteering, neighbour support, and project updates without inventing dates or links that have not been confirmed yet.",
      image: {
        src: "/images/trap4.JPEG",
        alt: "Volunteer walking through the landscape carrying practical field gear.",
      },
      opportunities: [
        {
          title: "Join a volunteer day",
          description:
            "Use this slot for working bees, track-side tasks, and beginner-friendly ways to learn the practical side of the project.",
        },
        {
          title: "Support the project locally",
          description:
            "Neighbour support might include sharing the story, helping with logistics, or backing the work once support channels are confirmed.",
        },
        {
          title: "Stay connected between field days",
          description:
            "Updates, photos, and simple email or social sign-ups can keep people involved even when they cannot be on site.",
        },
      ],
      note: "Specific dates, sign-up links, and support details can be dropped into this page as soon as they are ready.",
      actions: [
        {
          href: "/stories",
          label: "See the story format",
          variant: "secondary" as const,
        },
        {
          href: "/contact",
          label: "Go to contact page",
          variant: "ghost" as const,
        },
      ],
    },
    stories: {
      eyebrow: "Stories",
      title: "Updates, field notes, and small signs of progress.",
      description:
        "The stories page is ready for short, regular posts that keep the work visible without needing a heavy publishing workflow in v1.",
      image: {
        src: "/images/covesunrise.JPEG",
        alt: "Sunrise over Bob's Cove with the water glowing under the hills.",
      },
      formats: [
        {
          title: "Trail notes",
          description:
            "Brief observations from track walks or check-ins that help people notice the changing rhythm of the place.",
        },
        {
          title: "Practical explainers",
          description:
            "Short stories about how the work happens and why routine care matters can make conservation easier to understand.",
        },
        {
          title: "Bird moments",
          description:
            "Bird photography and small encounters are an approachable way to keep updates human, specific, and hopeful.",
        },
      ],
      cards: [
        {
          meta: "Placeholder story",
          title: "Trail notes from the bushline",
          summary:
            "A simple template for sharing what the cove felt like on a given walk, with one image and a few grounded observations.",
          href: "/stories",
          image: {
            src: "/images/covesunrise.JPEG",
            alt: "Dawn colour across the water at Bob's Cove.",
          },
        },
        {
          meta: "Placeholder story",
          title: "Why routine checks matter",
          summary:
            "A concise explainer that helps new visitors understand the practical work without leaning on jargon or inflated claims.",
          href: "/stories",
          image: {
            src: "/images/trap2.jpeg",
            alt: "Close-up of a trap box among dense green undergrowth.",
          },
        },
        {
          meta: "Placeholder story",
          title: "Moments that keep people involved",
          summary:
            "A photo-led update format that can hold bird sightings, seasonal shifts, or a memorable moment from the field.",
          href: "/stories",
          image: {
            src: "/images/bellbird.jpg",
            alt: "Bellbird perched among native foliage.",
          },
        },
      ],
      note: "This archive can launch with just a few hand-curated updates, then grow only if the team wants a more regular publishing rhythm.",
    },
    contact: {
      eyebrow: "Contact",
      title: "A simple contact page for the next phase of the project.",
      description:
        "This page makes space for preferred contact details, volunteer enquiries, and project links once the team confirms the right channels.",
      image: {
        src: "/images/jetty.JPG",
        alt: "Jetty reaching out over calm lake water at Bob's Cove.",
      },
      channels: [
        {
          title: "General enquiries",
          status: "Details to be confirmed",
          description:
            "Add the project's preferred email or contact form here once the team decides what should be public.",
        },
        {
          title: "Volunteer interest",
          status: "Ready for a sign-up link",
          description:
            "This card is ready for a volunteer expression-of-interest form or a simple message-based contact route.",
        },
        {
          title: "Project updates",
          status: "Ready for newsletter or socials",
          description:
            "If the project wants a lightweight update channel, this page can point people to it without adding complexity elsewhere.",
        },
      ],
      note: "Until contact details are confirmed, this page still helps visitors understand what kinds of enquiries the project expects to receive.",
      actions: [
        {
          href: "/get-involved",
          label: "See ways to help",
          variant: "secondary" as const,
        },
        {
          href: "/stories",
          label: "Explore story ideas",
          variant: "ghost" as const,
        },
      ],
    },
  },
} as const;
