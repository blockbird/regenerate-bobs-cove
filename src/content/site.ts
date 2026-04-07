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

export type SocialLink = {
  handle: string;
  href: string;
  label: string;
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/why-bobs-cove-matters", label: "Why Bobs Cove Matters" },
  { href: "/get-involved", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    handle: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587556109507",
    label: "Follow on Facebook",
  },
  {
    handle: "Instagram",
    href: "https://www.instagram.com/regenerate_bobs_cove/",
    label: "Follow on Instagram",
  },
] satisfies readonly SocialLink[];

export const siteContent = {
  siteName: "Regenerate Bobs Cove",
  siteDescription:
    "A community-led conservation group working to turn Bobs Cove into a thriving sanctuary for our unique taonga species.",
  location: "Bobs Cove, Aotearoa New Zealand",
  navigation,
  socialLinks,
  footer: {
    summary:
      "Together, we're removing introduced predators and restoring the natural habitat of Bobs Cove to protect our precious native wildlife.",
    links: navigation,
    note: "Join our community of volunteers. Follow our progress on Facebook and Instagram as we work toward a predator-free future.",
    socialLinks,
  },
  home: {
    hero: {
      eyebrow: "Community-led conservation in Bobs Cove",
      title: "Restoring Bobs Cove\nto a true native\nsanctuary.",
      description:
        "Regenerate Bobs Cove is a 100% volunteer-run initiative dedicated to removing introduced predators, restoring ancient bushland, and bringing native birdlife back to our backyards.",
      primaryAction: {
        href: "/get-involved",
        label: "Join us",
      },
      secondaryAction: {
        href: "#work",
        label: "Discover our vision",
        variant: "secondary" as const,
      },
      image: {
        src: "/images/hero2.jpg",
        alt: "Aerial view across the turquoise water and shoreline of Bobs Cove.",
      },
      focusAreas: [
        "Predator-free trapping",
        "Biodiversity restoration",
        "Community kaitiakitanga",
      ],
      brandPanel: {
        title: "From the bushline to the bay.",
        description:
          "The site should feel rooted in place: practical, welcoming, and led by the landscape as much as the copy.",
        logo: "/brand/RBCBOX.png",
        logoAlt: "Regenerate Bobs Cove logo.",
      },
      visuals: [
        {
          src: "/images/hero2.jpg",
          alt: "Wide view across Bobs Cove showing bush, water, and nearby homes.",
          caption: "A living cove with habitat, homes, and daily stewardship all close together.",
        },
        {
          src: "/images/jetty.JPG",
          alt: "Jetty reaching into the lake at Bobs Cove in soft evening light.",
          caption: "The shoreline is part of how people experience and care for the place.",
        },
      ],
    },
    why: {
      eyebrow: "Our vision",
      title: "A thriving ecosystem where forest and community meet.",
      description:
        "We have a difference worth defending. Our beech-clad slopes and shores are one of the best preserved native environments in the Wakatipu basin. The natural perimeter of lake shore, sub-alpine ridge line and the cliffs of the narrows give us a unique opportunity to defend from predators.",
      image: {
        src: "/images/coveview.jpg",
        alt: "Lake edge and forested hillside meeting at Bobs Cove.",
      },
      points: [
        {
          title: "A rare biodiversity hotspot",
          description:
            "Bobs Cove brings together lake edge, ancient beech trees, and residential areas in one visible landscape. Whether on the porch with a cuppa, standing high on the ridge, or sunbathing on the beach, nature here is ever-present.",
        },
        {
          title: "Protecting our taonga species",
          description:
            "When we rid our neighbourhoods of introduced pests like rats, stoats, feral cats and possums, then our native birds, lizards, and invertebrates will truly thrive.",
        },
        {
          title: "100% community-powered mahi",
          description:
            "Our success relies entirely on dedicated local volunteers managing trap lines on public and private land. Every trap brings us one step closer to our goal.",
        },
      ],
      note: "By taking practical, everyday action, we are ensuring this incredible environment is preserved for future generations.",
    },
    birds: {
      eyebrow: "Native wildlife",
      title: "The taonga we are working to protect.",
      description:
        "Introduced predators pose an existential threat to our native species. By maintaining our trapping networks, we are directly contributing to the survival of these incredible birds.",
      species: [
        {
          name: "Tūī",
          summary:
            "A strong ambassador for the cove's soundscape and a familiar sign that our pest-control efforts are working.",
          note: "Vital for pollinating native trees and dispersing seeds across the regenerating forest.",
          image: {
            src: "/images/tui.jpg",
            alt: "Tui perched among bright green leaves.",
          },
        },
        {
          name: "Toutouwai (Robin)",
          summary:
            "Friendly and inquisitive, these birds are highly vulnerable to ground predators like rats and stoats.",
          note: "Removing predators is the only way to ensure their populations can safely recover.",
          image: {
            src: "/images/robin.JPEG",
            alt: "New Zealand robin standing upright on a branch.",
          },
        },
        {
          name: "Korimako (Bellbird)",
          summary:
            "Their iconic, bell-like song is becoming a more common part of the everyday experience in the cove.",
          note: "A key indicator species for the overall health of our local ecosystem.",
          image: {
            src: "/images/bellbird.jpg",
            alt: "Bellbird perched on a branch with green foliage behind it.",
          },
        },
      ],
    },
    work: {
      eyebrow: "On the ground",
      title: "Practical conservation, driven by locals.",
      description:
        "Our work is active, measurable, and deeply connected to the land. We operate a growing network of traps across the region to systematically remove threats to our wildlife.",
      features: [
        {
          kicker: "Predator control",
          title: "Managing the trap lines",
          summary:
            "Our volunteers conduct routine checks, maintain equipment, and clear traps across public reserves and private properties to suppress possum, rat, and mustelid populations.",
          image: {
            src: "/images/trap2.jpeg",
            alt: "Trap equipment sitting among native plants and undergrowth.",
          },
        },
        {
          kicker: "Community stewardship",
          title: "Education and engagement",
          summary:
            "We believe in sharing knowledge. By educating our community about native biodiversity and predator control, we empower residents to proactively manage their own backyards.",
          image: {
            src: "/images/trap4.JPEG",
            alt: "Person carrying field gear while walking through grassy terrain near the cove.",
          },
        },
      ],
      emphasis: {
        title: "Every trap makes a difference.",
        description:
          "Achieving a predator-free Bobs Cove requires a landscape-scale effort. It's about a rhythm of practical tasks, strong local relationships, and a shared commitment to the environment.",
        image: {
          src: "/images/picnicpoint.jpg",
          alt: "High view looking across the cove's bright water and bush-covered shoreline.",
        },
        principles: [
          {
            title: "Consistent work",
            description:
              "Conservation isn't a one-off event. Regular trap checking and maintenance keeps predator numbers suppressed so native populations can recover.",
          },
          {
            title: "Accessible involvement",
            description:
              "You don't need to be an expert to help. We provide the tools, training, and support to get you started on your own property or on our community lines.",
          },
          {
            title: "Data-driven results",
            description:
              "We track every catch to understand predator patterns and measure the tangible impact our volunteers are making on the local ecosystem.",
          },
        ],
      },
    },
    landscape: {
      eyebrow: "Our environment",
      title: "A landscape worth defending.",
      description:
        "From towering alpine ridges to the beech-clad shoreline, Bobs Cove is an irreplaceable slice of Aotearoa.",
      gallery: [
        {
          src: "/images/covesunrise.JPEG",
          alt: "Sunrise light over the hills and water at Bobs Cove.",
          caption: "Bobs Cove and Lake Wakatipu from Jessie Peak",
          shape: "half",
        },
        {
          src: "/images/covesunset.png",
          alt: "Sunset light over Bobs Cove.",
          caption: "Evening light settling over the cove",
          shape: "half",
        },
        {
          src: "/images/picnicpoint.png",
          alt: "Clear blue water at Bobs Cove.",
          caption: "Pristine waters of the Wakatipu basin",
          shape: "half",
        },
        {
          src: "/images/jetty.png",
          alt: "Jetty at Bobs Cove.",
          caption: "The historic jetty stretching into the lake",
          shape: "half",
        },
      ],
    },
    join: {
      eyebrow: "Get involved",
      title: "We need your help to protect the cove.",
      description:
        "Scaling up our trapping network requires people power. Whether you can check a single trap in your backyard or maintain a line in the reserve, your contribution is vital to our success.",
      actions: [
        {
          href: "/get-involved",
          label: "Become a volunteer",
          variant: "light" as const,
        },
        {
          href: "/contact",
          label: "Contact the team",
          variant: "ghost" as const,
        },
      ],
      steps: [
        {
          title: "Start trapping in your backyard",
          description:
            "Backyard trapping is the foundation of a predator-free community. We can help you source the right trap and show you how to use it safely.",
        },
        {
          title: "Join a community trap line",
          description:
            "Volunteer to walk one of our established lines through the local reserves. It's a great way to get outdoors, stay fit, and protect nature.",
        },
        {
          title: "Support our funding efforts",
          description:
            "If you don't have the time to trap, your donations help us purchase new traps, bait, and equipment to expand our network.",
        },
      ],
    },
  },
  pages: {
    why: {
      eyebrow: "Why Bobs Cove matters",
      title: "Why this place is worth defending, trap by trap.",
      description:
        "Bobs Cove is a unique convergence of pristine water, ancient podocarp forest, and community. This proximity makes conservation highly visible and relies entirely on our shared commitment as kaitiaki (guardians) of the land.",
      image: {
        src: "/images/hero2.jpg",
        alt: "Wide view of Bobs Cove showing the lake, bush, and nearby settlement.",
      },
      sections: [
        {
          title: "A vital biodiversity hotspot",
          description: "Protecting our native species.",
          body: [
            "Bobs Cove isn't just a scenic backdrop; it is a critical habitat for native birds, lizards, and invertebrates. The kanuka-clad hills and dense beech forests offer refuge to species that are highly vulnerable to introduced predators.",
            "By establishing a robust trapping network here, we aren't just saving individual animals—we are restoring the entire ecosystem's natural balance and contributing to the national Predator Free 2050 initiative.",
          ],
        },
        {
          title: "Conservation driven by community",
          description: "100% volunteer-led action.",
          body: [
            "The success of Regenerate Bobs Cove proves that meaningful environmental change doesn't rely solely on government agencies. It is powered by locals who care deeply about their backyards.",
            "Our volunteers are out in all weather, walking the trap lines, recording data, and clearing pests. This steady, practical mahi (work) is what makes long-term recovery possible.",
          ],
        },
        {
          title: "A long-term commitment",
          description: "Patience and persistence.",
          body: [
            "Removing predators from a landscape is an ongoing mission. It requires patience, consistency, and a deep respect for the rhythms of nature.",
            "We are committed to this place for the long haul, knowing that every rat, stoat, or possum removed is a victory for the native species that belong here.",
          ],
        },
      ],
      cards: [
        {
          title: "Forest and lake ecosystems",
          description:
            "The intersection of deep water and regenerating native bush creates a highly diverse environment that requires active protection.",
          image: {
            src: "/images/coveview.jpg",
            alt: "Slope of native bush descending toward bright blue water.",
          },
        },
        {
          title: "Vulnerable birdlife",
          description:
            "Without active trapping, ground-nesting and forest birds face constant threats from stoats, ferrets, and rats.",
          image: {
            src: "/images/tui.jpg",
            alt: "Tui resting on a branch framed by green leaves.",
          },
        },
        {
          title: "Our volunteers",
          description:
            "The dedication of our local trapping coordinators and backyard trappers is the engine driving this conservation success.",
          image: {
            src: "/images/trap4.JPEG",
            alt: "Volunteer with field gear standing in open grass with hills beyond.",
          },
        },
      ],
    },
    getInvolved: {
      eyebrow: "Take action",
      title: "Help us build a predator-free sanctuary.",
      description:
        "Every trap counts. Whether you have a small backyard or want to volunteer on our public reserve lines, there is a critical role for you to play in protecting Bobs Cove.",
      image: {
        src: "/images/trap4.JPEG",
        alt: "Volunteer walking through the landscape carrying practical field gear.",
      },
      opportunities: [
        {
          title: "Backyard Trapping",
          description:
            "The easiest way to start. We can provide advice on selecting, placing, and safely operating traps to protect the birds visiting your own garden.",
        },
        {
          title: "Join a Reserve Trap Line",
          description:
            "Become part of our coordinated network. We'll assign you to a team, provide training, and get you walking one of our established trap lines.",
        },
        {
          title: "Donate to the Trust",
          description:
            "Purchasing high-quality, humane traps and bait is expensive. Your financial support allows us to rapidly expand our predator-control network.",
        },
      ],
      note: "We hold regular trapping workshops and community working bees. Reach out to get notified of our next induction session.",
      actions: [
        {
          href: "/contact",
          label: "Contact us to start",
          variant: "secondary" as const,
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Connect with the Regenerate Bobs Cove team.",
      description:
        "Ready to get a trap for your backyard, or want to join one of our community lines? Reach out through our social channels or email, and our volunteer coordinators will get you set up.",
      image: {
        src: "/images/jetty.JPG",
        alt: "Jetty reaching out over calm lake water at Bobs Cove.",
      },
      channels: [
        {
          title: "Volunteer Coordination",
          status: "Always looking for help",
          description:
            "If you want to get active on the ground, let us know. We'll pair you with an experienced trapper to learn the ropes.",
        },
        {
          title: "Backyard Trapping Support",
          status: "Advice available",
          description:
            "Unsure which trap to buy or where to place it? We can provide expert advice to make your backyard predator-free.",
        },
        {
          title: "General Enquiries",
          status: "Connect online",
          description:
            "Follow our journey, ask questions, and interact with the community directly through our Facebook and Instagram pages.",
        },
      ],
      note: "As a 100% volunteer-run group, we might take a couple of days to respond, but we are thrilled you want to help protect the cove.",
      socialLinks,
      actions: [
        {
          href: "/get-involved",
          label: "Learn about volunteering",
          variant: "secondary" as const,
        },
      ],
    },
  },
} as const;
