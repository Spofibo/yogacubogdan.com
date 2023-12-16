<script>
  import BhutaShuddhi from '$images/programms/bhuta-shuddhi.jpg?enhanced';
  import SuryaKryia from '$images/programms/surya-kriya.webp?enhanced';
  import YogaAsanas from '$images/programms/yoga-asanas.avif?enhanced';

  import ProgramCard from '$components/program-card.svelte';

  export let programs = [
    {
      url: '/programms/surya-kriya',
      name: 'Surya Kriya',
      slug: 'test',
      description:
        'A potent yogic practice of tremendous antiquity, designed as a holistic process for health, wellness, and complete inner well-being',
      benefits: [
        'Enhances mental clarity and focus',
        'Remedies weak constitutions',
        'Boosts vigor and vitality',
        'Prepares one for deeper states of meditation'
      ],
      imgPath: SuryaKryia
    },
    {
      url: '/programms/yoga-asanas',
      name: 'Yoga Asanas',
      slug: 'yoga asanas',
      description:
        'A set of 36 powerful Yogasanas, to enable the system to sustain higher dimensions of energy. This profound science enhances how one thinks, feels and experiences life. This program requires no special physical agility or previous experience of yoga. It is not merely physical exercise but enables a person to flower into his or her ultimate potential.',
      benefits: [
        'Relief of chronic health conditions',
        'Evolution of body and mind towards a higher possibility',
        'Deceleration of the ageing process'
      ],
      imgPath: YogaAsanas
    },
    {
      url: '/programms/bhuta-shuddhi',
      name: 'Bhuta Shuddhi',
      slug: 'test',
      description:
        'Bhuta Shuddhi means “purification of the elements” and is a process of cleansing the five elements within the human system (earth, water, fire, air and space). <br/> <br/> It is a unique opportunity for everyone to benefit from this powerful science, which otherwise requires intense spiritual practice.',
      benefits: [
        'Keeps the system in harmony and balance',
        'Prepares the system to handle powerful states of energy',
        'Creates the basis to gain mastery over the human system'
      ],
      imgPath: BhutaShuddhi
    }
  ];
</script>

<div class="container mt-20">
  <h1 class="font-bold mb-20 text-center text-5xl">Available Programs</h1>

  <div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6">
    {#each programs as { name, slug, description, benefits, imgPath }, index}
      <ProgramCard {name} {description} {benefits} {imgPath} {slug} />
    {/each}
  </div>
</div>
