# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'green',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'tea',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: Faker::Name.first_name,
									last_name: Faker::Name.last_name,
									party: 'hippy',
									bio: Faker::Lorem.paragraph(2),
									campaign: Faker::Lorem.paragraph(2))

Candidate.create(first_name: 'Hilary',
									last_name: 'Clinton',
									party: 'democrat',
									bio: 'Former Secretary of Defense and First Lady, so I have been around the block. Holler at me.',
									campaign: "I will get things done. Just going to do it! You know.")

Candidate.create(first_name: 'Bernie',
									last_name: 'Sanders',
									party: 'democrat',
									bio: "Sanders is the longest-serving independent in U.S. congressional history. A self-described democratic socialist, he favors policies similar to those of social democratic parties in Europe, particularly those instituted by the Nordic countries. He caucuses with the Democratic Party and has been the ranking minority member on the Senate Budget Committee since January 2015. Born in Brooklyn, New York, Sanders is a graduate of the University of Chicago. While a student, he was a member of the Young People's Socialist League and an active Civil Rights protest organizer for the Congress of Racial Equality and the Student Nonviolent Coordinating Committee. In 1963, he participated in the March on Washington for Jobs and Freedom.",
									campaign: "The American people must make a fundamental decision. Do we continue the 40-year decline of our middle class and the growing gap between the very rich and everyone else, or do we fight for a progressive economic agenda that creates jobs, raises wages, protects the environment and provides health care for all? Are we prepared to take on the enormous economic and political power of the billionaire class, or do we continue to slide into economic and political oligarchy? These are the most important questions of our time, and how we answer them will determine the future of our country.")

Candidate.create(first_name: 'Donald',
									last_name: 'Trump',
									party: 'republican',
									bio: "Donald J. Trump is the very definition of the American success story, continually setting the standards of excellence while expanding his interests in real estate, sports and entertainment. He is a graduate of the Wharton School of Finance. An accomplished author, Mr. Trump has authored over fifteen bestsellers, and his first book, The Art of the Deal, is considered a business classic and one of the most successful business books of all time.",
									campaign: "The Second Amendment to our Constitution is clear. The right of the people to keep and bear Arms shall not be infringed upon. Period.")

Candidate.create(first_name: 'Jeb',
									last_name: 'Bush',
									party: 'republican',
									bio: "John Ellis 'Jeb' Bush (born February 11, 1953) is an American businessman and politician who served as the 43rd Governor of Florida from 1999 to 2007. Bush is the second son of former President George H. W. Bush and former First Lady Barbara Bush, a brother of former President George W. Bush, and grandson of the late Senator Prescott Sheldon Bush. He grew up in Houston, Texas. He graduated from the Phillips Academy in Andover, Massachusetts and attended the University of Texas, where he earned a degree in Latin American affairs. Following his father's successful run for Vice President in 1980, he moved to Florida and pursued a career in real estate development. In 1986, Bush was named Florida's Secretary of Commerce, a position he held until his resignation in 1988 to help his father's successful campaign for the Presidency.",
									campaign: "Jeb favors simplifying the tax code. As Governor, he signed several tax cuts into law, including a cut and then a repeal of Florida’s 0.2 percent tax on stocks, bonds and other so-called intangible assets.[30] In announcing his presidential candidacy in 2015, Bush stated that his 'goal as president' would be annual GDP growth of 4 percent and 19 million new jobs.[31] A few economists have said that a 4% growth is unlikely.[32] Bush opposed the 2008-2009 auto-industry bailout. Bush opposes tax increases, but has declined to sign Grover Norquist's anti-tax pledge[33][34][35]
On September 8, Bush put forward his 'Reform & Growth Plan' proposal, which, if elected president, he would submit as the Reform and Growth Act of 2017. This proposed legislation would significantly simply tax codes, reducing the income tax from seven brackets, to three. The brackets would be at 10%, 25%, and 28%, for the lowest to highest incomes, respectively; the 28% top bracket tax rate returns the tax on highest income earners to the level set by Ronald Reagan in 1986. His plan eliminates the marriage penalty, the Alternative Minimum Tax, and removed the FICA tax paid by employees (not employers) for those ages 67 and older. [36]
In further proposal to simplify the tax code, Bush's proposal would reduce loopholes in the tax code, while keeping (but limiting) the charitable contribution tax deduction. For corporate taxes, The Reform & Growth Plan would reduce the corporate tax rate from the present 35% to 20%, to be below that of China; for corporate profits sent overseas, the plan would levy an 8.75% tax, payable over ten years, on those expatriated profits.[37]")
