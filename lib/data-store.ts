import type { BlogPost, Event, TeamMember, NewsletterSubscription } from "@/types"

// Local data store for preview purposes
class DataStore {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Importance of Leadership in Today's World",
      date: "April 15, 2023",
      excerpt: "Exploring how effective leadership can make a difference in various aspects of life and society.",
      image: "/placeholder.svg?height=400&width=600&text=Leadership",
      author: "FAST-LADS Team",
      content: `
        <p>Leadership is more than just being in charge; it's about taking care of those in your charge. In today's rapidly changing world, effective leadership has never been more important. From businesses to communities, from schools to governments, strong leadership is the foundation upon which success is built.</p>
        
        <h2>Why Leadership Matters</h2>
        
        <p>Leadership provides direction, inspiration, and a framework for collective achievement. Good leaders create environments where people can thrive, innovate, and contribute their best work. They foster collaboration, build trust, and help navigate through challenges and uncertainties.</p>
        
        <p>In an era of global connectivity and rapid technological advancement, leadership styles have evolved. The command-and-control approach of the past has given way to more collaborative, inclusive, and empathetic leadership models. Today's effective leaders understand the importance of emotional intelligence, cultural awareness, and adaptability.</p>
        
        <h2>Key Leadership Skills for Today's World</h2>
        
        <ul>
          <li><strong>Adaptability:</strong> The ability to pivot and adjust strategies in response to changing circumstances.</li>
          <li><strong>Emotional Intelligence:</strong> Understanding and managing emotions, both your own and those of others.</li>
          <li><strong>Communication:</strong> Clearly articulating vision, expectations, and feedback.</li>
          <li><strong>Inclusivity:</strong> Valuing diverse perspectives and creating environments where everyone feels they belong.</li>
          <li><strong>Vision:</strong> Seeing beyond immediate challenges to long-term possibilities.</li>
        </ul>
        
        <h2>Developing Leadership Skills</h2>
        
        <p>Leadership is not an innate quality but a set of skills that can be developed and refined over time. Through education, mentorship, practice, and reflection, individuals can enhance their leadership capabilities. Organizations like FAST-LADS play a crucial role in this development process, providing structured programs, workshops, and opportunities for practical application.</p>
        
        <p>As we face complex global challenges—from climate change to economic inequality, from technological disruption to public health crises—effective leadership at all levels of society becomes increasingly vital. By investing in leadership development today, we are building a stronger, more resilient future for tomorrow.</p>
        
        <h2>Conclusion</h2>
        
        <p>Leadership is not about titles or positions; it's about impact, influence, and inspiration. In a world of constant change and uncertainty, good leadership provides stability, direction, and hope. By cultivating leadership skills in ourselves and others, we contribute to a better world for all.</p>
      `,
    },
    {
      id: 2,
      title: "5 Essential Skills Every Leader Should Develop",
      date: "March 28, 2023",
      excerpt: "A comprehensive guide to the key skills that can help you become a more effective leader.",
      image: "/placeholder.svg?height=400&width=600&text=Skills",
      author: "FAST-LADS Team",
      content: `
        <p>Effective leadership requires a diverse set of skills that enable individuals to inspire, guide, and empower others. While some people may have natural leadership tendencies, the most successful leaders continuously work to develop and refine their abilities.</p>
        
        <h2>1. Emotional Intelligence</h2>
        
        <p>Emotional intelligence (EQ) is perhaps the most critical leadership skill. It involves understanding and managing your own emotions while also recognizing and influencing the emotions of others. Leaders with high EQ can navigate conflicts, build strong relationships, and create positive work environments.</p>
        
        <p>To develop emotional intelligence:</p>
        <ul>
          <li>Practice self-awareness through reflection and feedback</li>
          <li>Work on recognizing emotional triggers</li>
          <li>Develop active listening skills</li>
          <li>Learn to empathize with different perspectives</li>
        </ul>
        
        <h2>2. Communication</h2>
        
        <p>Clear, effective communication is fundamental to leadership success. This includes not just speaking and writing clearly, but also listening actively and adapting your communication style to different audiences and situations.</p>
        
        <p>To improve communication skills:</p>
        <ul>
          <li>Practice concise and clear messaging</li>
          <li>Develop your storytelling abilities</li>
          <li>Focus on non-verbal communication</li>
          <li>Seek feedback on your communication effectiveness</li>
        </ul>
        
        <h2>3. Strategic Thinking</h2>
        
        <p>Leaders must be able to see the big picture, anticipate changes, and develop plans that align with long-term goals. Strategic thinking involves analyzing complex situations, identifying patterns, and making decisions that position the team or organization for future success.</p>
        
        <p>To enhance strategic thinking:</p>
        <ul>
          <li>Stay informed about industry trends</li>
          <li>Practice scenario planning</li>
          <li>Seek diverse perspectives when problem-solving</li>
          <li>Regularly review and adjust goals and plans</li>
        </ul>
        
        <h2>4. Adaptability</h2>
        
        <p>In today's rapidly changing world, leaders must be adaptable and comfortable with ambiguity. This means being willing to adjust plans, try new approaches, and lead through uncertainty with confidence.</p>
        
        <p>To become more adaptable:</p>
        <ul>
          <li>Embrace change rather than resisting it</li>
          <li>Develop comfort with uncertainty</li>
          <li>Learn from failures and setbacks</li>
          <li>Stay open to new ideas and approaches</li>
        </ul>
        
        <h2>5. Delegation and Empowerment</h2>
        
        <p>Effective leaders understand they can't do everything themselves. They must be able to delegate tasks appropriately, develop their team members' capabilities, and create an environment where others feel empowered to take initiative.</p>
        
        <p>To improve delegation skills:</p>
        <ul>
          <li>Identify team members' strengths and development areas</li>
          <li>Clearly communicate expectations and desired outcomes</li>
          <li>Provide necessary resources and support</li>
          <li>Focus on results rather than micromanaging processes</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Developing these five essential leadership skills—emotional intelligence, communication, strategic thinking, adaptability, and delegation—will significantly enhance your effectiveness as a leader. Remember that leadership development is a continuous journey, not a destination. By consistently working to improve these skills, you'll be better equipped to lead your team through challenges and toward shared success.</p>
      `,
    },
    {
      id: 3,
      title: "How to Build a Strong Team Culture",
      date: "February 12, 2023",
      excerpt:
        "Strategies for creating a positive and productive team environment that fosters growth and collaboration.",
      image: "/placeholder.svg?height=400&width=600&text=Team+Culture",
      author: "FAST-LADS Team",
      content: `
        <p>A strong team culture is the foundation of any successful organization. When team members share common values, feel connected to a larger purpose, and work well together, they can achieve remarkable results. Building such a culture doesn't happen by accident—it requires intentional effort and consistent leadership.</p>
        
        <h2>Define Your Core Values</h2>
        
        <p>Every strong team culture starts with clearly defined values. These values serve as guiding principles for decision-making, behavior, and interactions. To define meaningful core values:</p>
        
        <ul>
          <li>Involve team members in the process to ensure buy-in</li>
          <li>Choose values that authentically represent your team's aspirations</li>
          <li>Keep the list focused (3-5 core values is ideal)</li>
          <li>Define what each value looks like in practice</li>
        </ul>
        
        <p>Once established, these values should be consistently reinforced through communication, recognition, and leadership example.</p>
        
        <h2>Foster Psychological Safety</h2>
        
        <p>Psychological safety—the belief that one can speak up without fear of negative consequences—is essential for innovation, problem-solving, and continuous improvement. Research by Google and others has shown it to be the most important factor in high-performing teams.</p>
        
        <p>To create psychological safety:</p>
        <ul>
          <li>Model vulnerability as a leader</li>
          <li>Respond positively when team members take risks or make mistakes</li>
          <li>Actively invite diverse perspectives and ideas</li>
          <li>Address disrespectful behavior immediately</li>
        </ul>
        
        <h2>Establish Clear Communication Channels</h2>
        
        <p>Effective communication is the lifeblood of a strong team culture. Teams need both structured communication (regular meetings, updates) and informal channels for collaboration and connection.</p>
        
        <p>Consider implementing:</p>
        <ul>
          <li>Regular team meetings with clear agendas</li>
          <li>One-on-one check-ins between leaders and team members</li>
          <li>Digital collaboration tools appropriate for your team's needs</li>
          <li>Transparent information sharing about decisions and changes</li>
        </ul>
        
        <h2>Celebrate Wins and Learn from Setbacks</h2>
        
        <p>How a team responds to both success and failure significantly impacts its culture. Creating rituals to celebrate achievements reinforces positive behaviors, while approaching setbacks as learning opportunities builds resilience.</p>
        
        <p>Effective practices include:</p>
        <ul>
          <li>Regular recognition of individual and team accomplishments</li>
          <li>Conducting blameless post-mortems after setbacks</li>
          <li>Sharing lessons learned across the team</li>
          <li>Celebrating effort and progress, not just outcomes</li>
        </ul>
        
        <h2>Invest in Team Development</h2>
        
        <p>Strong teams continuously grow together. Investing in both professional development and team-building activities signals that you value your people and their collective capability.</p>
        
        <p>Consider:</p>
        <ul>
          <li>Skills training relevant to your team's work</li>
          <li>Team-building activities that align with your values</li>
          <li>Opportunities for cross-training and knowledge sharing</li>
          <li>Social events that strengthen relationships</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Building a strong team culture requires consistent effort and attention, but the rewards are substantial: higher engagement, better retention, increased innovation, and ultimately, superior results. By focusing on values, psychological safety, communication, learning, and development, leaders can create an environment where team members thrive individually and collectively.</p>
        
        <p>Remember that culture is dynamic—it requires ongoing nurturing and occasional course correction as teams evolve. The most successful leaders regularly take the pulse of their team culture and make adjustments as needed to keep it healthy and aligned with organizational goals.</p>
      `,
    },
    {
      id: 4,
      title: "Leadership Lessons from Historical Figures",
      date: "January 5, 2023",
      excerpt: "Learning from the successes and failures of great leaders throughout history.",
      image: "/placeholder.svg?height=400&width=600&text=History",
      author: "FAST-LADS Team",
      content: `
        <p>Throughout history, remarkable leaders have shaped the course of human events through their vision, courage, and determination. By studying these historical figures, we can extract valuable leadership lessons that remain relevant today. Here, we explore insights from several influential leaders whose impact continues to resonate across generations.</p>
        
        <h2>Mahatma Gandhi: The Power of Principled Leadership</h2>
        
        <p>Mahatma Gandhi led India to independence through nonviolent civil disobedience, demonstrating that moral authority can be more powerful than formal authority. His leadership offers several enduring lessons:</p>
        
        <ul>
          <li><strong>Lead by example:</strong> Gandhi lived the principles he advocated, embracing simplicity and nonviolence in his personal life.</li>
          <li><strong>Maintain consistency between words and actions:</strong> His famous quote, "Be the change you wish to see in the world," reflects his commitment to integrity.</li>
          <li><strong>Harness the power of a clear, moral vision:</strong> Gandhi's unwavering commitment to independence through nonviolent means provided a north star for his followers.</li>
        </ul>
        
        <h2>Winston Churchill: Leadership in Crisis</h2>
        
        <p>As Prime Minister of the United Kingdom during World War II, Churchill demonstrated exceptional leadership during one of history's darkest periods:</p>
        
        <ul>
          <li><strong>Communicate with clarity and conviction:</strong> Churchill's speeches rallied a nation facing existential threat.</li>
          <li><strong>Demonstrate resilience:</strong> His refusal to surrender despite overwhelming odds inspired his country to persevere.</li>
          <li><strong>Balance realism with optimism:</strong> Churchill acknowledged the gravity of situations while maintaining confidence in ultimate victory.</li>
        </ul>
        
        <h2>Catherine the Great: Strategic Vision and Cultural Leadership</h2>
        
        <p>As Empress of Russia from 1762 to 1796, Catherine transformed her adopted country into a major European power:</p>
        
        <ul>
          <li><strong>Embrace continuous learning:</strong> Despite lacking formal education, Catherine became one of the most educated rulers of her time through voracious reading and correspondence with Enlightenment thinkers.</li>
          <li><strong>Balance tradition with innovation:</strong> She modernized Russia while respecting its cultural foundations.</li>
          <li><strong>Invest in human capital:</strong> Catherine established Russia's first state-funded institution of higher education for women and reformed education throughout the empire.</li>
        </ul>
        
        <h2>Nelson Mandela: Reconciliation and Moral Leadership</h2>
        
        <p>After spending 27 years as a political prisoner, Mandela became South Africa's first Black president and led the country's transition from apartheid:</p>
        
        <ul>
          <li><strong>Practice forgiveness:</strong> Mandela chose reconciliation over retribution, preventing potential civil war.</li>
          <li><strong>Take the long view:</strong> His patience and perspective, developed during imprisonment, enabled him to focus on long-term goals rather than short-term victories.</li>
          <li><strong>Unite diverse constituencies:</strong> Mandela built coalitions across racial, political, and economic divides.</li>
        </ul>
        
        <h2>Common Threads</h2>
        
        <p>Despite their different contexts and approaches, these historical leaders share several common qualities:</p>
        
        <ul>
          <li><strong>Unwavering commitment to core principles</strong></li>
          <li><strong>Courage to stand firm in the face of opposition</strong></li>
          <li><strong>Ability to communicate compelling visions</strong></li>
          <li><strong>Adaptability to changing circumstances</strong></li>
          <li><strong>Willingness to sacrifice personal comfort for larger causes</strong></li>
        </ul>
        
        <h2>Learning from Failures</h2>
        
        <p>Even great leaders make mistakes, and their failures offer equally valuable lessons:</p>
        
        <ul>
          <li>Gandhi's sometimes rigid adherence to nonviolence may have delayed independence in some instances</li>
          <li>Churchill's colonial views limited his understanding of global changes</li>
          <li>Catherine's focus on the nobility came at the expense of the serfs</li>
          <li>Mandela's economic policies achieved mixed results</li>
        </ul>
        
        <p>These shortcomings remind us that leadership is inherently complex and that even visionary leaders have blind spots.</p>
        
        <h2>Conclusion</h2>
        
        <p>By studying historical leaders—their triumphs and their failures—we gain perspective on our own leadership challenges. While contexts change, the fundamental aspects of human nature and organizational dynamics remain remarkably consistent across time. The lessons of history provide both inspiration and practical guidance for today's leaders seeking to make a positive difference in their spheres of influence.</p>
      `,
    },
    {
      id: 5,
      title: "The Future of Leadership in a Digital Age",
      date: "December 20, 2022",
      excerpt: "How technology is changing the landscape of leadership and what skills will be needed in the future.",
      image: "/placeholder.svg?height=400&width=600&text=Future",
      author: "FAST-LADS Team",
      content: `
        <p>The digital revolution is fundamentally transforming how organizations operate and how leaders lead. As artificial intelligence, remote work, and digital transformation reshape industries, leadership must evolve to meet new challenges and opportunities. This article explores how leadership is changing in the digital age and what skills will be essential for future leaders.</p>
        
        <h2>The Shifting Leadership Landscape</h2>
        
        <p>Several key trends are reshaping leadership requirements:</p>
        
        <ul>
          <li><strong>Distributed teams:</strong> Remote and hybrid work arrangements have become permanent fixtures, requiring leaders to manage teams across different locations, time zones, and cultural contexts.</li>
          <li><strong>Accelerating change:</strong> The pace of technological advancement continues to increase, shortening strategic planning horizons and requiring greater organizational agility.</li>
          <li><strong>Information abundance:</strong> Leaders must navigate environments with unprecedented amounts of data while helping teams avoid information overload.</li>
          <li><strong>Automation and AI:</strong> As routine tasks become automated, human work is shifting toward creativity, complex problem-solving, and emotional intelligence.</li>
          <li><strong>Flatter hierarchies:</strong> Traditional command-and-control structures are giving way to more networked, collaborative organizational models.</li>
        </ul>
        
        <h2>Essential Leadership Skills for the Digital Age</h2>
        
        <h3>1. Digital Fluency</h3>
        
        <p>While leaders don't need to be technical experts, they must understand digital technologies well enough to:</p>
        <ul>
          <li>Make informed decisions about technology investments</li>
          <li>Anticipate how emerging technologies might disrupt their industry</li>
          <li>Identify opportunities to leverage digital tools for competitive advantage</li>
          <li>Model effective use of digital communication platforms</li>
        </ul>
        
        <h3>2. Data-Informed Decision Making</h3>
        
        <p>Future leaders will need to:</p>
        <ul>
          <li>Understand data analytics fundamentals</li>
          <li>Balance data-driven insights with human judgment</li>
          <li>Ask the right questions of data specialists</li>
          <li>Recognize the limitations and potential biases in data</li>
        </ul>
        
        <h3>3. Virtual Leadership Presence</h3>
        
        <p>Leading effectively in digital environments requires:</p>
        <ul>
          <li>Creating engagement in virtual meetings</li>
          <li>Building trust without regular face-to-face interaction</li>
          <li>Communicating clearly and concisely through digital channels</li>
          <li>Establishing team rituals that work in remote/hybrid contexts</li>
        </ul>
        
        <h3>4. Continuous Learning Mindset</h3>
        
        <p>In a rapidly evolving landscape, leaders must:</p>
        <ul>
          <li>Embrace lifelong learning and model it for their teams</li>
          <li>Develop learning agility—the ability to learn, unlearn, and relearn quickly</li>
          <li>Create learning cultures that encourage experimentation</li>
          <li>Stay current with emerging trends and technologies</li>
        </ul>
        
        <h3>5. Ethical Technology Leadership</h3>
        
        <p>As technology raises new ethical questions, leaders must:</p>
        <ul>
          <li>Consider the ethical implications of technology decisions</li>
          <li>Ensure responsible use of AI, automation, and data</li>
          <li>Balance efficiency gains with human impact</li>
          <li>Promote digital well-being within their organizations</li>
        </ul>
        
        <h2>Leading Digital Transformation</h2>
        
        <p>Beyond individual skills, future leaders must be able to guide their organizations through digital transformation. This involves:</p>
        
        <ul>
          <li><strong>Creating a compelling digital vision</strong> that connects technology changes to organizational purpose</li>
          <li><strong>Building digital capabilities</strong> through strategic hiring, partnerships, and upskilling</li>
          <li><strong>Managing the human side of change</strong> by addressing fears and resistance</li>
          <li><strong>Fostering innovation</strong> while maintaining operational excellence</li>
          <li><strong>Developing new business models</strong> that leverage digital opportunities</li>
        </ul>
        
        <h2>Conclusion: Human Leadership in a Digital World</h2>
        
        <p>Perhaps paradoxically, as our world becomes more digital, certain fundamentally human leadership qualities become more important, not less. Empathy, ethical judgment, creativity, and the ability to inspire others remain irreplaceable leadership attributes.</p>
        
        <p>The most effective leaders of the future will combine digital fluency with these timeless human qualities. They will use technology as a tool to enhance human potential rather than replace it, creating organizations that are both high-tech and high-touch.</p>
        
        <p>As we navigate this digital transformation, leadership development must evolve as well. Organizations that invest in developing these new leadership capabilities will be better positioned to thrive in an increasingly digital, complex, and rapidly changing world.</p>
      `,
    },
    {
      id: 6,
      title: "Emotional Intelligence: The Key to Effective Leadership",
      date: "November 8, 2022",
      excerpt:
        "Understanding how emotional intelligence can enhance your leadership capabilities and team relationships.",
      image: "/placeholder.svg?height=400&width=600&text=EQ",
      author: "FAST-LADS Team",
      content: `
        <p>In the complex landscape of modern leadership, technical expertise and strategic thinking are necessary but insufficient. Research consistently shows that emotional intelligence (EI or EQ) is often what distinguishes exceptional leaders from merely competent ones. This article explores how emotional intelligence impacts leadership effectiveness and provides practical strategies for developing this critical skill set.</p>
        
        <h2>What is Emotional Intelligence?</h2>
        
        <p>Emotional intelligence, a concept popularized by psychologist Daniel Goleman, encompasses the ability to recognize, understand, and manage our own emotions while also recognizing, understanding, and influencing the emotions of others. It comprises five key components:</p>
        
        <ul>
          <li><strong>Self-awareness:</strong> Recognizing your emotions and understanding how they affect your thoughts and behavior</li>
          <li><strong>Self-regulation:</strong> Managing disruptive emotions and adapting to changing circumstances</li>
          <li><strong>Motivation:</strong> Being driven to achieve for intrinsic reasons beyond external rewards</li>
          <li><strong>Empathy:</strong> Understanding the emotions, needs, and concerns of others</li>
          <li><strong>Social skills:</strong> Managing relationships, building networks, and finding common ground</li>
        </ul>
        
        <h2>Why Emotional Intelligence Matters in Leadership</h2>
        
        <p>Numerous studies have demonstrated the impact of emotional intelligence on leadership outcomes:</p>
        
        <ul>
          <li><strong>Team performance:</strong> Leaders with high EQ create psychologically safe environments where teams can innovate and excel</li>
          <li><strong>Change management:</strong> Emotionally intelligent leaders navigate organizational change more effectively by addressing emotional responses</li>
          <li><strong>Conflict resolution:</strong> High-EQ leaders can de-escalate tensions and find constructive solutions to disagreements</li>
          <li><strong>Talent development:</strong> Emotionally intelligent leaders better understand what motivates their team members and can provide more effective coaching</li>
          <li><strong>Decision-making:</strong> Leaders with developed EQ make more balanced decisions by considering both emotional and rational factors</li>
        </ul>
        
        <p>Research by TalentSmart found that emotional intelligence is the strongest predictor of performance, explaining 58% of success in all types of jobs, with an even higher correlation in leadership positions.</p>
        
        <h2>Developing Emotional Intelligence</h2>
        
        <p>Unlike IQ, which remains relatively stable throughout life, emotional intelligence can be developed with deliberate practice. Here are strategies for enhancing each component:</p>
        
        <h3>Self-Awareness</h3>
        <ul>
          <li>Practice mindfulness meditation to increase awareness of your emotional states</li>
          <li>Keep an emotion journal to track patterns in your emotional responses</li>
          <li>Seek regular feedback from trusted colleagues about your blind spots</li>
          <li>Take psychometric assessments designed to measure emotional intelligence</li>
        </ul>
        
        <h3>Self-Regulation</h3>
        <ul>
          <li>Develop techniques to manage stress in high-pressure situations</li>
          <li>Practice the "pause" between stimulus and response</li>
          <li>Reframe negative situations to find constructive perspectives</li>
          <li>Establish healthy outlets for processing difficult emotions</li>
        </ul>
        
        <h3>Motivation</h3>
        <ul>
          <li>Clarify your personal values and connect your work to them</li>
          <li>Set challenging but achievable goals that energize you</li>
          <li>Cultivate optimism by focusing on possibilities rather than obstacles</li>
          <li>Celebrate progress and learn from setbacks</li>
        </ul>
        
        <h3>Empathy</h3>
        <ul>
          <li>Practice active listening without interrupting or formulating responses</li>
          <li>Ask open-ended questions to understand others' perspectives</li>
          <li>Pay attention to non-verbal cues in communication</li>
          <li>Seek to understand diverse viewpoints, especially from those different from you</li>
        </ul>
        
        <h3>Social Skills</h3>
        <ul>
          <li>Improve your communication clarity and transparency</li>
          <li>Develop conflict resolution techniques</li>
          <li>Practice giving constructive feedback</li>
          <li>Build relationships proactively, not just when you need something</li>
        </ul>
        
        <h2>Emotional Intelligence in Action</h2>
        
        <p>Emotionally intelligent leadership manifests in specific behaviors:</p>
        
        <ul>
          <li>Acknowledging team members' emotions during challenging times</li>
          <li>Adapting communication styles to different individuals' needs</li>
          <li>Remaining calm and focused during crises</li>
          <li>Providing specific, constructive feedback without triggering defensiveness</li>
          <li>Creating environments where people feel safe to express concerns</li>
          <li>Taking responsibility for mistakes and modeling vulnerability</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>In an era of increasing automation and artificial intelligence, the distinctly human qualities of emotional intelligence become even more valuable. As technical skills become more commoditized, the ability to lead with emotional intelligence—to inspire, connect, and bring out the best in others—will increasingly differentiate exceptional leaders.</p>
        
        <p>By developing emotional intelligence, leaders can create more engaged teams, navigate change more effectively, and build organizations where both people and performance thrive. The journey to higher emotional intelligence requires self-reflection, feedback, and practice, but the evidence is clear that few leadership investments yield greater returns.</p>
      `,
    },
  ]

  private events: Event[] = [
    {
      id: 1,
      title: "Leadership Workshop Series",
      date: "March 15, 2023",
      description: "A series of workshops focused on developing essential leadership skills.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Workshop+1",
        "/placeholder.svg?height=300&width=400&text=Workshop+2",
      ],
      semester: "Spring 2023",
      featured: true,
    },
    {
      id: 2,
      title: "Annual Conference",
      date: "February 20, 2023",
      description: "Our flagship event bringing together students and industry leaders.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Conference+1",
        "/placeholder.svg?height=300&width=400&text=Conference+2",
      ],
      semester: "Spring 2023",
      featured: true,
    },
    {
      id: 3,
      title: "Community Service Project",
      date: "January 10, 2023",
      description: "Giving back to the community through volunteer work and service projects.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Service+1",
        "/placeholder.svg?height=300&width=400&text=Service+2",
      ],
      semester: "Spring 2023",
      featured: true,
    },
    {
      id: 4,
      title: "Networking Mixer",
      date: "December 5, 2022",
      description: "An opportunity for students to connect with professionals and alumni.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Mixer+1",
        "/placeholder.svg?height=300&width=400&text=Mixer+2",
      ],
      semester: "Fall 2022",
      featured: false,
    },
    {
      id: 5,
      title: "Leadership Panel Discussion",
      date: "November 15, 2022",
      description: "Industry leaders share their experiences and insights on effective leadership.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Panel+1",
        "/placeholder.svg?height=300&width=400&text=Panel+2",
      ],
      semester: "Fall 2022",
      featured: false,
    },
    {
      id: 6,
      title: "Team Building Retreat",
      date: "October 8, 2022",
      description: "A weekend retreat focused on building strong team dynamics and collaboration skills.",
      images: [
        "/placeholder.svg?height=300&width=400&text=Retreat+1",
        "/placeholder.svg?height=300&width=400&text=Retreat+2",
      ],
      semester: "Fall 2022",
      featured: false,
    },
  ]

  private teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Founder & President",
      image: "/placeholder.svg?height=200&width=200&text=Alex",
      bio: "Alex founded FAST-LADS with a vision to develop leadership skills in students.",
      type: "founder",
      order: 1,
    },
    {
      id: 2,
      name: "Sam Rodriguez",
      position: "Co-Founder & Vice President",
      image: "/placeholder.svg?height=200&width=200&text=Sam",
      bio: "Sam brings extensive experience in student organizations and leadership development.",
      type: "founder",
      order: 2,
    },
    {
      id: 3,
      name: "Jordan Lee",
      position: "Co-Founder & Treasurer",
      image: "/placeholder.svg?height=200&width=200&text=Jordan",
      bio: "Jordan oversees the financial aspects of FAST-LADS and helps secure funding for events.",
      type: "founder",
      order: 3,
    },
    {
      id: 4,
      name: "Taylor Smith",
      position: "President",
      image: "/placeholder.svg?height=200&width=200&text=Taylor",
      bio: "Taylor leads the current executive council with a focus on expanding our reach.",
      type: "current",
      order: 1,
    },
    {
      id: 5,
      name: "Morgan Williams",
      position: "Vice President",
      image: "/placeholder.svg?height=200&width=200&text=Morgan",
      bio: "Morgan coordinates our events and workshops, ensuring they align with our mission.",
      type: "current",
      order: 2,
    },
    {
      id: 6,
      name: "Casey Brown",
      position: "Secretary",
      image: "/placeholder.svg?height=200&width=200&text=Casey",
      bio: "Casey manages our communications and keeps detailed records of our activities.",
      type: "current",
      order: 3,
    },
    {
      id: 7,
      name: "Riley Garcia",
      position: "Treasurer",
      image: "/placeholder.svg?height=200&width=200&text=Riley",
      bio: "Riley oversees our budget and ensures financial transparency.",
      type: "current",
      order: 4,
    },
    {
      id: 8,
      name: "Avery Martinez",
      position: "Events Coordinator",
      image: "/placeholder.svg?height=200&width=200&text=Avery",
      bio: "Avery plans and executes our events, ensuring they provide value to our members.",
      type: "current",
      order: 5,
    },
    {
      id: 9,
      name: "Jamie Wilson",
      position: "Marketing Director",
      image: "/placeholder.svg?height=200&width=200&text=Jamie",
      bio: "Jamie manages our social media presence and creates content to promote our activities.",
      type: "current",
      order: 6,
    },
    {
      id: 10,
      name: "Quinn Thompson",
      position: "Outreach Coordinator",
      image: "/placeholder.svg?height=200&width=200&text=Quinn",
      bio: "Quinn builds relationships with other organizations and recruits new members.",
      type: "current",
      order: 7,
    },
    {
      id: 11,
      name: "Jordan Patel",
      position: "Former President",
      image: "/placeholder.svg?height=200&width=200&text=Jordan",
      bio: "Jordan led FAST-LADS during the 2021-2022 academic year.",
      type: "past",
      order: 1,
    },
    {
      id: 12,
      name: "Alex Rivera",
      position: "Former Vice President",
      image: "/placeholder.svg?height=200&width=200&text=Alex",
      bio: "Alex served as Vice President during the 2021-2022 academic year.",
      type: "past",
      order: 2,
    },
  ]

  private slideshowImages: string[] = [
    "/placeholder.svg?height=600&width=1200&text=Event+1",
    "/placeholder.svg?height=600&width=1200&text=Event+2",
    "/placeholder.svg?height=600&width=1200&text=Event+3",
    "/placeholder.svg?height=600&width=1200&text=Event+4",
    "/placeholder.svg?height=600&width=1200&text=Event+5",
  ]

  private newsletterSubscriptions: NewsletterSubscription[] = []

  // Blog post methods
  getBlogPosts(): BlogPost[] {
    return this.blogPosts
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find((post) => post.id === id)
  }

  // Event methods
  getEvents(featured = false): Event[] {
    if (featured) {
      return this.events.filter((event) => event.featured)
    }
    return this.events
  }

  getEventById(id: number): Event | undefined {
    return this.events.find((event) => event.id === id)
  }

  // Team member methods
  getTeamMembers(type: string | null = null): TeamMember[] {
    if (type) {
      return this.teamMembers.filter((member) => member.type === type)
    }
    return this.teamMembers
  }

  // Slideshow methods
  getSlideshowImages(): string[] {
    return this.slideshowImages
  }

  // Newsletter methods
  subscribeToNewsletter(email: string): { success: boolean; message: string } {
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please provide a valid email address",
      }
    }

    // Check if already subscribed
    const existingSubscription = this.newsletterSubscriptions.find((sub) => sub.email === email)
    if (existingSubscription) {
      if (existingSubscription.subscribed) {
        return {
          success: true,
          message: "You are already subscribed to our newsletter",
        }
      } else {
        // Resubscribe
        existingSubscription.subscribed = true
        existingSubscription.subscribedAt = new Date()
        return {
          success: true,
          message: "Welcome back! You've been resubscribed to our newsletter",
        }
      }
    }

    // Add new subscription
    this.newsletterSubscriptions.push({
      email,
      subscribed: true,
      subscribedAt: new Date(),
    })

    return {
      success: true,
      message: "Successfully subscribed to the newsletter",
    }
  }
}

// Create a singleton instance
const dataStore = new DataStore()
export default dataStore
