/* Ltd Business 101 — forming and running a UK private limited company, with a
   game-studio section. Built from the "Ltd Business 101" guide (figures for 2026/27).
   Not legal, tax or financial advice. */
registerCourse({
  id: "ltd-business-101",
  title: "Ltd Business 101",
  description: "Forming and running a UK limited company, from incorporation to VGEC.",
  emoji: "🏢",
  chapters: [

    /* ------------------------------------------------------------------ */
    {
      id: "legal-person",
      title: "The company as a legal person",
      items: [
        {
          id: "separate-person",
          title: "A separate person",
          description: "What a limited company is and why the state invented it.",
          xp: 15,
          questions: [
            { type: "tf", prompt: "A limited company is a separate legal person: it can own things, sign contracts, employ people and be sued.", answer: true },
            { type: "mcq", prompt: "A founder sits in two seats. Which two?",
              choices: ["Director and shareholder", "Employee and customer", "Trustee and beneficiary", "Agent and principal"], answer: 0 },
            { type: "mcq", prompt: "As a director, you…",
              choices: ["run the company and owe duties to it", "own the company", "are automatically liable for its debts", "collect the dividends"], answer: 0,
              explanation: "Ownership is the shareholder seat. Running it, and the legal duties, belong to the director seat." },
            { type: "mcq", prompt: "Limited liability means creditors can usually only take…",
              choices: ["company assets", "your house", "your personal savings", "any of these"], answer: 0 },
            { type: "tf", prompt: "Once the company exists, its money is still your money to spend as you like.", answer: false,
              explanation: "The company's money is not your money. Taking it out has rules (salary, dividend, expenses, loan)." },
            { type: "mcq", prompt: "Which of these does NOT put your personal assets at risk?",
              choices: ["Giving a personal guarantee", "Breaking director duties", "Trading while insolvent", "Filing accounts on time"], answer: 3 },
            { type: "type", prompt: "In return for limited liability, the company must file information in ______. (one word)", answer: "public" },
            { type: "mcq", prompt: "Why did the state create limited companies?",
              choices: ["So commerce has a vehicle that outlives one person and can take risk without ruining a family", "To collect more tax", "To stop people trading", "To replace banks"], answer: 0 }
          ]
        },
        {
          id: "why-ltd",
          title: "Why founders use a Ltd",
          description: "The reasons a company is the shape the rest of the system expects.",
          xp: 15,
          questions: [
            { type: "mcq", prompt: "Investors can only buy ______ in a company.",
              choices: ["shares", "loans", "receipts", "licences"], answer: 0 },
            { type: "tf", prompt: "A sole trader can claim the video games tax credit (VGEC).", answer: false,
              explanation: "VGEC is only available to a company. Sole traders, partnerships and LLPs cannot claim it." },
            { type: "mcq", prompt: "Why is it useful for intellectual property to sit in a company?",
              choices: ["It survives you leaving, dying or taking a job", "IP becomes free", "IP no longer needs contracts", "Companies House registers it for you"], answer: 0 },
            { type: "tf", prompt: "Grants, tax credits, platforms and publishers usually want a company number.", answer: true },
            { type: "tf", prompt: "The admin that comes with a company is just decoration and can be ignored.", answer: false,
              explanation: "The admin is how the state checks the limited-liability bargain is being kept." },
            { type: "reading",
              passage: "A limited company is a separate legal {{1}}. Limited liability is a bargain: creditors can usually only take company {{2}}. {{sentence}} Its directors must also behave to a legal standard. The moment the company exists, its money is not your money, and its game is not automatically your game.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["person", "address", "tax"], answer: 0 },
                    2: { choices: ["assets", "directors", "names"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["In return, the company must file information in public and keep proper records.", "In return, the founder never pays any tax.", "In return, creditors can take the founder's home."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the two words the passage uses to describe what limited liability is.", answer: "a bargain" },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["A company is separate from its founder, and limited liability comes with obligations.", "Founders should keep the company's money in their own account.", "Directors have no legal standard to meet."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["The Limited-Liability Bargain", "How to Pay Dividends", "Choosing a Company Name"], answer: 0 }
              ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "forming",
      title: "Forming the company",
      items: [
        {
          id: "name-address",
          title: "Name, address, email",
          description: "Fees, naming rules, the registered office and registered email.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "Online incorporation fee at Companies House (from 1 February 2026)?",
              choices: ["£100", "£12", "£50", "£156"], answer: 0 },
            { type: "mcq", prompt: "Paper incorporation costs…",
              choices: ["£100", "£124", "£156", "£200"], answer: 1 },
            { type: "mcq", prompt: "Same-day incorporation via software costs…",
              choices: ["£100", "£124", "£156", "£250"], answer: 2 },
            { type: "tf", prompt: "The legal name must usually end in 'Limited' or 'Ltd'.", answer: true },
            { type: "mcq", prompt: "Which word is likely to be restricted or need permission in a company name?",
              choices: ["Royal", "Pixel", "Studio", "Forge"], answer: 0,
              explanation: "Words implying a link to government, royalty or a regulated profession are restricted: Bank, Institute, British, Royal…" },
            { type: "tf", prompt: "Your trading name on Steam must match the legal company name exactly.", answer: false,
              explanation: "A trading name can differ. The legal name is the one on invoices and bank accounts." },
            { type: "tf", prompt: "Companies House can force a name change even after incorporation if the name is misleading.", answer: true },
            { type: "mcq", prompt: "The registered office must be…",
              choices: ["a real UK address that can receive official post", "a PO Box", "any email address", "an address outside the UK"], answer: 0 },
            { type: "tf", prompt: "The registered office address is public.", answer: true },
            { type: "tf", prompt: "The registered email address is public.", answer: false,
              explanation: "It is not public, but Companies House uses it for official notices, so it must be one someone reads." },
            { type: "mcq", prompt: "Why must a company have a registered office?",
              choices: ["So courts, HMRC and Companies House have a place where papers count as served", "For marketing", "So Steam can send merchandise", "To claim business rates relief"], answer: 0 },
            { type: "mcq", prompt: "Which of these is usually private?",
              choices: ["Registered office", "Director's service address", "Director's home address (unless reused as the office)"], answer: 2 }
          ]
        },
        {
          id: "directors-shares",
          title: "Directors, ID, shares",
          description: "Who is responsible, identity verification, shares and PSCs.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "Minimum number of directors for a private company?",
              choices: ["1", "2", "3", "5"], answer: 0 },
            { type: "tf", prompt: "A private company must appoint a company secretary.", answer: false },
            { type: "tf", prompt: "New directors and people with significant control must verify their identity before incorporation (mandatory since 18 November 2025).", answer: true },
            { type: "mcq", prompt: "Identity verification is free via…",
              choices: ["GOV.UK One Login", "Steam", "a paper form posted to HMRC", "your bank"], answer: 0 },
            { type: "tf", prompt: "Your personal verification code follows you across every company you are ever involved in.", answer: true },
            { type: "mcq", prompt: "The standard one-person share setup is…",
              choices: ["100 ordinary shares of £1", "1 share of £100", "1,000 shares of £10", "10 shares of £1,000"], answer: 0,
              explanation: "100 shares keeps the maths clean: 1 share = 1%." },
            { type: "tf", prompt: "You must deposit £100 in cash on day one to cover the share capital.", answer: false,
              explanation: "Share capital on paper is a statement of ownership. Technically you owe the £100 until you pay it in; most people transfer it once the bank account opens." },
            { type: "mcq", prompt: "Someone is a person with significant control (PSC) when they hold…",
              choices: ["more than 10% of shares or votes", "more than 25% of shares or votes", "more than 50%", "exactly 100%"], answer: 1 },
            { type: "type", prompt: "Type the missing word: ______ with significant control (PSC).", answer: "person" },
            { type: "mcq", prompt: "Why does the PSC register exist?",
              choices: ["So the public can see who actually controls a company", "To calculate dividends", "To assign SIC codes", "To set the registered email"], answer: 0 },
            { type: "tf", prompt: "Two or more founders should sign a short shareholders' agreement covering leaving, decisions and vesting.", answer: true,
              explanation: "Far cheaper before a falling-out than after." }
          ]
        },
        {
          id: "sic-articles",
          title: "SIC codes, articles, certificate",
          description: "The remaining incorporation fields and what you get back.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "SIC codes describe…",
              choices: ["what the company does", "who owns the company", "where the company is based", "the company's tax rate"], answer: 0 },
            { type: "mcq", prompt: "Which SIC code is 'publishing of computer games'?",
              choices: ["58210", "62011", "12345", "90000"], answer: 0 },
            { type: "tf", prompt: "SIC code 62011 covers ready-made interactive leisure and entertainment software development.", answer: true },
            { type: "tf", prompt: "You can add SIC codes later.", answer: true },
            { type: "tf", prompt: "The lawful purpose statement is confirmed at incorporation and again on every confirmation statement.", answer: true },
            { type: "mcq", prompt: "The articles of association are…",
              choices: ["the company's constitution", "the tax return", "the list of shareholders", "the bank mandate"], answer: 0 },
            { type: "mcq", prompt: "Unless a solicitor has a reason not to, use…",
              choices: ["model articles", "bespoke articles", "no articles", "the previous company's articles"], answer: 0 },
            { type: "mcq", prompt: "The web filing authentication code is best described as…",
              choices: ["the password for every Companies House filing", "the company's tax number", "the bank sort code", "the SIC code"], answer: 0 },
            { type: "mcq", prompt: "Register for Corporation Tax with HMRC within…",
              choices: ["1 month of starting to trade", "3 months of starting to trade", "6 months", "12 months"], answer: 1 },
            { type: "tf", prompt: "The company needs its own Government Gateway account, separate from your personal one.", answer: true },
            { type: "type", prompt: "Banks and platforms will ask for the ______ of incorporation. (one word)", answer: "certificate" }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "tax",
      title: "Tax: the two layers",
      items: [
        {
          id: "corporation-tax",
          title: "Corporation Tax",
          description: "The company's own bill: rates, losses, deadlines and filing.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "Corporation Tax rate on profits up to £50,000?",
              choices: ["19%", "20%", "25%", "26.5%"], answer: 0 },
            { type: "mcq", prompt: "Corporation Tax rate on profits over £250,000?",
              choices: ["19%", "25%", "35.75%", "40%"], answer: 1 },
            { type: "mcq", prompt: "The effective rate on the slice between £50,001 and £250,000 is about…",
              choices: ["19%", "22%", "26.5%", "30%"], answer: 2,
              explanation: "Marginal relief removes the cliff edge, but that band is taxed more heavily than either headline rate." },
            { type: "tf", prompt: "If you control more than one company, the £50k / £250k limits are split between them.", answer: true },
            { type: "tf", prompt: "Trading losses can be carried forward to reduce profit that is taxed later.", answer: true,
              explanation: "A studio often loses money for years then earns at launch. A loss you cannot evidence is a loss you cannot use." },
            { type: "mcq", prompt: "Corporation Tax is due…",
              choices: ["9 months and 1 day after the accounting period ends", "12 months after", "on 31 January", "monthly"], answer: 0 },
            { type: "mcq", prompt: "The CT600 return is due…",
              choices: ["9 months after period end", "12 months after period end", "6 months after", "immediately"], answer: 1,
              explanation: "Payment often comes before the return." },
            { type: "tf", prompt: "You still file a return if profit is £0.", answer: true },
            { type: "tf", prompt: "HMRC's free online CT600 service is still available for new filings.", answer: false,
              explanation: "It closed on 31 March 2026. Every company now files via commercial software or an accountant." },
            { type: "mcq", prompt: "Why might year one need two Corporation Tax returns?",
              choices: ["Accounts can cover more than 12 months but a CT period cannot", "HMRC always asks twice", "One for each director", "One for VAT and one for CT"], answer: 0 }
          ]
        },
        {
          id: "salary",
          title: "Paying yourself: salary",
          description: "PAYE, National Insurance and the usual director salary.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "The personal allowance (income taxed at 0%) is…",
              choices: ["£12,570", "£10,500", "£5,000", "£50,270"], answer: 0 },
            { type: "mcq", prompt: "Employee National Insurance is 8% on earnings between £12,570 and…",
              choices: ["£50,270", "£90,000", "£250,000", "£25,000"], answer: 0,
              explanation: "Then 2% above that." },
            { type: "mcq", prompt: "The company pays employer NI at 15% on pay above…",
              choices: ["£5,000 a year", "£12,570 a year", "£50,270 a year", "£0"], answer: 0 },
            { type: "tf", prompt: "A one-person company paying only its director can claim the Employment Allowance.", answer: false,
              explanation: "The allowance is meant for firms with staff. A second person on payroll doing real work opens it up." },
            { type: "mcq", prompt: "The Employment Allowance is worth up to…",
              choices: ["£10,500 off employer NI", "£500", "£5,000", "£12,570"], answer: 0 },
            { type: "mcq", prompt: "Why do most sole directors pay themselves £12,570?",
              choices: ["No Income Tax, no employee NI, and it counts as a State Pension qualifying year", "It is the legal minimum", "HMRC requires it", "It avoids Corporation Tax entirely"], answer: 0 },
            { type: "tf", prompt: "Director salary and employer NI are both deductible against Corporation Tax.", answer: true },
            { type: "tf", prompt: "Paying at least the NI Lower Earnings Limit is what banks a State Pension qualifying year.", answer: true },
            { type: "type", prompt: "Salary is taxed through which payroll system? Type the four-letter acronym.", answer: "PAYE" }
          ]
        },
        {
          id: "dividends",
          title: "Dividends and Self Assessment",
          description: "The second layer: taking profits out as an owner.",
          xp: 20,
          questions: [
            { type: "tf", prompt: "Dividends can only be paid from profits left after Corporation Tax.", answer: true },
            { type: "mcq", prompt: "The dividend allowance is…",
              choices: ["£500", "£1,000", "£2,000", "£12,570"], answer: 0 },
            { type: "mcq", prompt: "From April 2026 the basic-rate dividend tax is…",
              choices: ["8.75%", "10.75%", "20%", "35.75%"], answer: 1 },
            { type: "mcq", prompt: "Higher-rate dividend tax is…",
              choices: ["33.75%", "35.75%", "39.35%", "40%"], answer: 1 },
            { type: "mcq", prompt: "Additional-rate dividend tax is…",
              choices: ["35.75%", "39.35%", "45%", "50%"], answer: 1 },
            { type: "tf", prompt: "Dividends sit on top of salary when working out which tax band they fall in.", answer: true },
            { type: "tf", prompt: "Paying a dividend when there are no post-tax profits is unlawful.", answer: true,
              explanation: "Minute it and issue a dividend voucher; check the profits exist first." },
            { type: "mcq", prompt: "Why are dividends taxed at a lower rate than salary?",
              choices: ["The company has already paid Corporation Tax on that profit", "Owners are exempt from tax", "Dividends are a cost of labour", "HMRC prefers dividends"], answer: 0 },
            { type: "mcq", prompt: "HMRC asks for Self Assessment payments on account once your personal bill exceeds…",
              choices: ["£1,000", "£500", "£10,000", "£12,570"], answer: 0,
              explanation: "The first January after a good year can feel like 150% of what you expected. Set money aside as dividends are paid." },
            { type: "tf", prompt: "Company pension contributions reduce company profit and avoid NI entirely.", answer: true,
              explanation: "Often the most efficient route once you have more than you need to live on. Not a year-one problem." }
          ]
        },
        {
          id: "vat",
          title: "VAT and platforms",
          description: "When VAT applies and who is the merchant of record.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "The standard VAT rate is…",
              choices: ["20%", "15%", "25%", "17.5%"], answer: 0 },
            { type: "mcq", prompt: "You must register for VAT if taxable turnover exceeds…",
              choices: ["£90,000 in any rolling 12 months", "£50,000 in a tax year", "£250,000", "£12,570"], answer: 0 },
            { type: "tf", prompt: "You may register for VAT early to reclaim VAT on tools and software.", answer: true },
            { type: "tf", prompt: "Once VAT-registered, digital filing is mandatory.", answer: true },
            { type: "mcq", prompt: "When you sell through Steam or a console store, who is usually the merchant of record?",
              choices: ["The platform", "Your company", "The player", "HMRC"], answer: 0,
              explanation: "Your invoice to Valve is a business-to-business sale of a licence." },
            { type: "tf", prompt: "If you sell direct from your own site, UK VAT (and EU VAT via a One Stop Shop) becomes your problem.", answer: true },
            { type: "type", prompt: "The EU scheme for VAT on direct sales is the One ______ Shop.", answer: "stop" },
            { type: "reading",
              passage: "The company pays tax on its own profits; that is Corporation Tax. You pay personal tax only on what you {{1}} out. Salary is treated like any job and attracts National Insurance. A dividend is a return on ownership paid from profits left after Corporation Tax, so it is taxed again at a {{2}} rate. {{sentence}} Because collecting VAT is work, the state lets small businesses off below a turnover threshold.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["take", "lend", "invest"], answer: 0 },
                    2: { choices: ["lower", "higher", "zero"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["If there are no post-tax profits, a dividend is unlawful.", "Dividends are always completely tax-free.", "Salary is never deductible against Corporation Tax."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the phrase that says what a dividend is.", answer: "a return on ownership" },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["Tax happens in two layers: the company's profits, then what the owner takes out.", "VAT is charged on every sale from day one.", "Salary and dividends are taxed identically."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["Two Layers of Tax", "How to Register a Name", "The Cultural Test"], answer: 0 }
              ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "money-people-duties",
      title: "Money, people, duties",
      items: [
        {
          id: "money-out",
          title: "How money leaves the company",
          description: "The four legitimate routes and the director's-loan trap.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "Which is NOT a legitimate route for money to leave the company?",
              choices: ["PAYE salary", "Dividend", "Expense repayment with receipts", "Cash withdrawal with no record"], answer: 3 },
            { type: "tf", prompt: "A dividend should be minuted and a dividend voucher issued.", answer: true },
            { type: "mcq", prompt: "If you still owe the company money 9 months and 1 day after year end, the company pays a temporary tax charge of… (loans made from 6 April 2026)",
              choices: ["35.75%", "19%", "25%", "10.75%"], answer: 0,
              explanation: "Older loans are charged at 33.75%. It is refunded once you repay, but only on the next return." },
            { type: "tf", prompt: "The director's-loan tax charge is refunded when you repay the loan, but only on the next return, so it is a cashflow hit.", answer: true },
            { type: "mcq", prompt: "A director's loan over ______ at any point in the year is also a taxable benefit in kind.",
              choices: ["£10,000", "£1,000", "£5,000", "£50,000"], answer: 0 },
            { type: "tf", prompt: "Money you lend TO the company can be repaid to you tax-free, as long as it is recorded.", answer: true },
            { type: "mcq", prompt: "If personal rent is paid from the company card with no paperwork, HMRC can treat it as…",
              choices: ["salary or a director's loan", "a business expense", "a dividend", "nothing"], answer: 0,
              explanation: "Mixing accounts also makes limited liability look weaker: you never treated the company as separate." },
            { type: "mcq", prompt: "What does a bank want in order to open a business account for a new Ltd?",
              choices: ["The certificate of incorporation", "A dividend voucher", "The CT600", "A PEGI rating"], answer: 0 },
            { type: "tf", prompt: "Challenger banks are usually faster than high-street banks at opening an account for a new Ltd.", answer: true },
            { type: "mcq", prompt: "When should you open the business bank account?",
              choices: ["Day one", "After the first sale", "At the first year end", "Only once VAT-registered"], answer: 0 }
          ]
        },
        {
          id: "people",
          title: "Contractors and employees",
          description: "Working unpaid, hiring freelancers, taking on staff.",
          xp: 20,
          questions: [
            { type: "tf", prompt: "You can work for the company unpaid at the start; PAYE only has to run once a salary is paid.", answer: true },
            { type: "tf", prompt: "A company whose only worker is its sole director is exempt from pension auto-enrolment.", answer: true },
            { type: "mcq", prompt: "Under UK copyright law, a freelancer usually owns what they create unless…",
              choices: ["the contract assigns it to the company", "you paid the invoice", "they used your computer", "the work is in a game"], answer: 0 },
            { type: "tf", prompt: "Paying a contractor's invoice buys the copyright in their work.", answer: false },
            { type: "mcq", prompt: "Employers' liability insurance must cover at least…",
              choices: ["£5 million", "£1 million", "£500,000", "£10 million"], answer: 0,
              explanation: "It is a legal duty once you have staff who are not only you. The fine for operating without it is £2,500 a day." },
            { type: "mcq", prompt: "HMRC decides whether someone is really an employee by looking at…",
              choices: ["control, the right to send a substitute, and whether work is ongoing", "the job title on the contract", "how much they are paid", "whether they work from home"], answer: 0 },
            { type: "mcq", prompt: "IR35 / off-payroll rules matter most when the company is essentially…",
              choices: ["selling your time to one client", "shipping a game", "publishing on Steam", "claiming VGEC"], answer: 0 },
            { type: "tf", prompt: "The National Living Wage applies to employees and is age-banded.", answer: true },
            { type: "mcq", prompt: "Since April 2026, Statutory Sick Pay is…",
              choices: ["available from day one with no earnings floor", "only after 3 days off", "only for staff earning over £12,570", "abolished"], answer: 0 },
            { type: "mcq", prompt: "From January 2027, unfair-dismissal protection starts after…",
              choices: ["six months", "two years", "one year", "day one"], answer: 0,
              explanation: "And the compensation cap is removed. A written probation process with notes matters." },
            { type: "mcq", prompt: "The new body enforcing the Employment Rights Act 2025 is the…",
              choices: ["Fair Work Agency", "Companies House", "ICO", "CMA"], answer: 0 }
          ]
        },
        {
          id: "director-duties",
          title: "Director duties",
          description: "Why limited liability is not a shield for everything.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "How many director duties are set out in the Companies Act 2006?",
              choices: ["Seven", "Three", "Ten", "Twelve"], answer: 0 },
            { type: "mcq", prompt: "Director duties are owed to…",
              choices: ["the company, even if you own 100% of it", "the shareholders personally", "HMRC", "Companies House"], answer: 0 },
            { type: "mcq", prompt: "Which of these is NOT one of the seven duties?",
              choices: ["Maximise your own salary", "Avoid conflicts of interest", "Use your own judgement", "Declare any interest in a deal with the company"], answer: 0 },
            { type: "mcq", prompt: "Continuing to trade when the company cannot pay its debts is called…",
              choices: ["wrongful trading", "insider dealing", "a director's loan", "dormancy"], answer: 0,
              explanation: "It can make you personally liable and get you banned from being a director." },
            { type: "tf", prompt: "Personal guarantees on leases or bank products punch through limited liability on purpose.", answer: true },
            { type: "tf", prompt: "Promoting the success of the company includes considering staff, suppliers, community, environment and reputation.", answer: true },
            { type: "reading",
              passage: "Directors owe seven duties to the {{1}}, even if they own every share. They must use their own {{2}}, take reasonable care, avoid conflicts of interest, and declare any interest in a deal with the company. {{sentence}} If a company cannot pay its debts and the director keeps trading anyway, that is wrongful trading, and the director can be personally liable and banned.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["company", "shareholders", "bank"], answer: 0 },
                    2: { choices: ["judgement", "money", "office"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["These duties exist because limited liability would be a scam if directors could loot the company.", "These duties only apply to large public companies.", "These duties can be waived by the sole shareholder."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the name for continuing to trade when the company cannot pay its debts.", answer: "wrongful trading" },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["Directors have legal duties that make limited liability conditional on good conduct.", "Owning all the shares removes a director's duties.", "Trading while insolvent has no consequences."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["What a Director Owes the Company", "How to Issue Shares", "Choosing a Bank"], answer: 0 }
              ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "filings-records-ip",
      title: "Filings, records, IP",
      items: [
        {
          id: "filing-calendar",
          title: "The filing calendar",
          description: "What is due when, and what happens if you're late.",
          xp: 25,
          questions: [
            { type: "mcq", prompt: "Your default accounting reference date is…",
              choices: ["the last day of the month you incorporated in, one year on", "31 March", "31 December", "the day you incorporated"], answer: 0,
              explanation: "Many founders move it to 31 March to line up with the tax year." },
            { type: "tf", prompt: "You can lengthen the accounting period only once every five years.", answer: true },
            { type: "mcq", prompt: "The confirmation statement must be filed at least every…",
              choices: ["12 months (£50 online)", "6 months (£20 online)", "3 years", "Only when something changes"], answer: 0 },
            { type: "tf", prompt: "You must file a confirmation statement even if nothing has changed.", answer: true },
            { type: "mcq", prompt: "Annual accounts are usually due at Companies House…",
              choices: ["9 months after year end", "12 months after year end", "3 months after year end", "on 31 January"], answer: 0 },
            { type: "mcq", prompt: "First accounts that span more than 12 months are due…",
              choices: ["21 months from incorporation", "9 months from incorporation", "12 months from incorporation", "24 months from incorporation"], answer: 0 },
            { type: "mcq", prompt: "Automatic penalty for private-company accounts up to 1 month late?",
              choices: ["£150", "£375", "£750", "£1,500"], answer: 0 },
            { type: "mcq", prompt: "Penalty for accounts more than 6 months late?",
              choices: ["£1,500", "£750", "£375", "£150"], answer: 0 },
            { type: "tf", prompt: "Late-filing penalties double if you are late two years running.", answer: true },
            { type: "tf", prompt: "A late confirmation statement carries an automatic fine.", answer: false,
              explanation: "No automatic fine, but it is a criminal offence and a strike-off trigger." },
            { type: "mcq", prompt: "Persistent non-filing can get the company…",
              choices: ["struck off the register", "a tax refund", "a bigger dividend allowance", "extra SIC codes"], answer: 0,
              explanation: "Which is how you lose the vehicle, the bank account, and sometimes the IP sitting in it." },
            { type: "tf", prompt: "A dormant company does not need to file anything.", answer: false },
            { type: "mcq", prompt: "Companies House's plan to force accounts through software and publish small-company P&L was…",
              choices: ["paused in January 2026 and is under review, with at least 21 months' notice promised", "introduced in April 2026", "cancelled forever", "never proposed"], answer: 0 },
            { type: "mcq", prompt: "Your personal Self Assessment return is due by…",
              choices: ["31 January", "5 April", "31 March", "30 September"], answer: 0 }
          ]
        },
        {
          id: "records-insurance-data",
          title: "Records, insurance, data, home",
          description: "Keeping evidence, covering risk, handling player data.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "How long must you keep company records?",
              choices: ["Six years", "One year", "Three years", "Ten years"], answer: 0 },
            { type: "mcq", prompt: "Which insurance is a statutory duty once you have staff other than yourself?",
              choices: ["Employers' liability", "Public liability", "Professional indemnity", "Cyber"], answer: 0 },
            { type: "mcq", prompt: "Professional indemnity insurance is for when…",
              choices: ["clients rely on your work", "people can be physically harmed", "you hold payment data", "you have employees"], answer: 0 },
            { type: "mcq", prompt: "The ICO data protection fee for a small company is around…",
              choices: ["£50 a year", "£500 a year", "£5 a year", "£5,000 a year"], answer: 0 },
            { type: "tf", prompt: "UK GDPR applies to wishlists, accounts, analytics and email lists.", answer: true },
            { type: "tf", prompt: "Targeting EU players directly can require an EU representative.", answer: true },
            { type: "mcq", prompt: "The tax-free home-working allowance without receipts is…",
              choices: ["£6 a week", "£26 a week", "£6 a month", "£60 a year"], answer: 0 },
            { type: "tf", prompt: "Using a spare bedroom as an office usually triggers business rates.", answer: false,
              explanation: "A shopfront or dedicated premises can. Check your tenancy before putting the address on the register." },
            { type: "tf", prompt: "Official-looking letters demanding extra 'register' fees after incorporation are usually scams.", answer: true }
          ]
        },
        {
          id: "ip",
          title: "Intellectual property",
          description: "Why the game is not automatically the company's, and how to fix that.",
          xp: 25,
          questions: [
            { type: "tf", prompt: "Copyright in code, art, design and writing arises automatically in the UK.", answer: true },
            { type: "tf", prompt: "Ownership of that copyright automatically sits in the Ltd.", answer: false },
            { type: "mcq", prompt: "Work you made before incorporation becomes the company's when…",
              choices: ["you assign it in a signed written document", "the company is registered", "you mention it in a Notion page", "you pay yourself a salary"], answer: 0 },
            { type: "mcq", prompt: "Work by employees in the course of their job usually belongs to…",
              choices: ["the employer", "the employee", "the publisher", "nobody"], answer: 0 },
            { type: "mcq", prompt: "Asking contractors to waive moral rights avoids problems with…",
              choices: ["their right to be credited or to object to changes", "their pay", "their pension", "their tax"], answer: 0 },
            { type: "tf", prompt: "Engine licences (Unreal, Unity, Godot) bind the company once it ships.", answer: true },
            { type: "mcq", prompt: "Unreal's royalty starts…",
              choices: ["after a game passes a lifetime revenue threshold", "on the first sale", "at incorporation", "never"], answer: 0 },
            { type: "mcq", prompt: "GPL code compiled into the shipped game can oblige you to…",
              choices: ["release your own source code", "pay a royalty to Unreal", "register for VAT", "change your company name"], answer: 0 },
            { type: "mcq", prompt: "Which open-source licences are described as easy?",
              choices: ["MIT and Apache", "GPL and AGPL", "All of them", "None of them"], answer: 0 },
            { type: "tf", prompt: "'I bought it on a marketplace' always means you can ship an asset in a commercial game.", answer: false,
              explanation: "Music, fonts, middleware, marketplace assets and generative-AI assets each have their own licence terms." },
            { type: "mcq", prompt: "Registering a trade mark online for one class costs from around…",
              choices: ["£170", "£17", "£1,700", "£50"], answer: 0 },
            { type: "type", prompt: "Trade marks are registered with which UK body? Type the three-letter acronym.", answer: "IPO" },
            { type: "reading",
              passage: "Copyright in code, art, design and writing arises automatically, but ownership does not automatically sit in the company. Work you made before incorporation is yours until you {{1}} it in writing. Work by employees in the course of the job usually belongs to the {{2}}. {{sentence}} Ask contractors to waive moral rights too, or you can be stuck when you need to cut their work.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["assign", "delete", "publish"], answer: 0 },
                    2: { choices: ["employer", "contractor", "state"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["Work by contractors usually belongs to them until it is assigned.", "Work by contractors always belongs to the client automatically.", "Contractors cannot own copyright in the UK."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the rights you should ask contractors to waive.", answer: "moral rights" },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["Owning the game requires written assignments, because copyright does not move on its own.", "Copyright must be registered before it exists.", "Employees keep the copyright in everything they make."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["Who Owns the Game?", "How to Pay a Dividend", "Setting a Year End"], answer: 0 }
              ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "game-studio",
      title: "Game studio law and money",
      items: [
        {
          id: "vgec",
          title: "VGEC",
          description: "The Video Games Expenditure Credit: who, how much, and how.",
          xp: 25,
          questions: [
            { type: "mcq", prompt: "VGEC stands for…",
              choices: ["Video Games Expenditure Credit", "Video Games Export Certificate", "Virtual Goods Excise Charge", "Video Games Employment Credit"], answer: 0 },
            { type: "mcq", prompt: "VGEC can be claimed by…",
              choices: ["the UK company that designs, produces and tests the game, makes the decisions and pays the bills", "any studio that ships on Steam", "a sole trader developer", "the publisher's marketing team"], answer: 0 },
            { type: "mcq", prompt: "At least what share of core development spend must be used or consumed in the UK?",
              choices: ["10%", "25%", "50%", "80%"], answer: 0 },
            { type: "mcq", prompt: "To pass the BFI cultural test a game needs…",
              choices: ["16 of 31 points", "31 of 31 points", "10 of 20 points", "a PEGI rating"], answer: 0 },
            { type: "mcq", prompt: "The headline VGEC rate is…",
              choices: ["34% of qualifying UK core spend", "25.5%", "19%", "80%"], answer: 0,
              explanation: "The credit is itself taxable, so the net cash benefit is about 25.5%." },
            { type: "mcq", prompt: "Qualifying spend is capped at what share of total core spend?",
              choices: ["80%", "100%", "50%", "10%"], answer: 0 },
            { type: "tf", prompt: "VGEC is a payable credit: a loss-making studio with no Corporation Tax to reduce still gets cash.", answer: true },
            { type: "tf", prompt: "Marketing spend counts as a core cost for VGEC.", answer: false,
              explanation: "Core costs are design, production and testing." },
            { type: "tf", prompt: "With an interim certificate you can claim as you go; you do not have to wait for release.", answer: true },
            { type: "mcq", prompt: "The old Video Games Tax Relief closes on…",
              choices: ["31 March 2027", "31 March 2026", "1 June 2026", "1 April 2025"], answer: 0 },
            { type: "mcq", prompt: "The cultural-test statutory declaration must be sworn…",
              choices: ["in person before a solicitor or commissioner for oaths", "on a video call", "by email", "on the CT600"], answer: 0 },
            { type: "tf", prompt: "From 1 June 2026, every director of the applicant company must complete BFI ID verification before a certificate is issued.", answer: true },
            { type: "tf", prompt: "Costs paid for by a grant can also be claimed as VGEC.", answer: false,
              explanation: "That is the ringfence: two public pots cannot fund the same hour of labour. Track grant labour in its own column." },
            { type: "type", prompt: "Which body runs the cultural test? Type the three-letter acronym.", answer: "BFI" }
          ]
        },
        {
          id: "reliefs-platforms",
          title: "Other reliefs and platforms",
          description: "R&D, SEIS/EIS, EMI, and the reality of selling through stores.",
          xp: 20,
          questions: [
            { type: "mcq", prompt: "R&D relief requires…",
              choices: ["scientific or technological uncertainty", "making a game", "being loss-making", "a PEGI rating"], answer: 0,
              explanation: "Some engine or tools work might qualify; most content work will not." },
            { type: "mcq", prompt: "First-time R&D claimants must notify HMRC in advance within…",
              choices: ["six months of the period end", "one month", "two years", "no notification needed"], answer: 0 },
            { type: "mcq", prompt: "SEIS and EIS give tax relief to…",
              choices: ["investors buying new shares in a young trading company", "the company", "employees", "contractors"], answer: 0,
              explanation: "Get advance assurance from HMRC before you pitch." },
            { type: "mcq", prompt: "EMI options are for…",
              choices: ["granting staff shares under a tax-favoured scheme", "loot boxes", "exporting games", "VAT"], answer: 0 },
            { type: "mcq", prompt: "Steam's revenue share is…",
              choices: ["30%", "12%", "50%", "15%"], answer: 0 },
            { type: "mcq", prompt: "To avoid 30% US withholding tax on Steam payments, a UK Ltd completes form…",
              choices: ["W-8BEN-E", "CT600", "SA100", "P60"], answer: 0 },
            { type: "tf", prompt: "Steam pays in US dollars, monthly, in arrears.", answer: true },
            { type: "mcq", prompt: "Console stores and Google Play use which questionnaire to produce PEGI ratings automatically?",
              choices: ["IARC", "IR35", "ICO", "ASA"], answer: 0 },
            { type: "tf", prompt: "Steam requires a PEGI rating before you can sell.", answer: false,
              explanation: "Steam has its own content questionnaire. Physical UK retail needs a real PEGI rating." },
            { type: "tf", prompt: "Console certification is a free upload just like Steam.", answer: false }
          ]
        },
        {
          id: "ratings-children",
          title: "Ratings, loot boxes, children",
          description: "PEGI's 2026 rules, gambling law, the Children's code and the Online Safety Act.",
          xp: 25,
          questions: [
            { type: "tf", prompt: "PEGI 12, 16 and 18 have legal force in the UK for physical sales.", answer: true },
            { type: "mcq", prompt: "From June 2026, a game with paid random items (loot boxes, gacha, card packs) gets at least…",
              choices: ["PEGI 16", "PEGI 12", "PEGI 7", "PEGI 3"], answer: 0 },
            { type: "mcq", prompt: "Social-casino style play is rated…",
              choices: ["PEGI 18", "PEGI 16", "PEGI 12", "PEGI 7"], answer: 0 },
            { type: "mcq", prompt: "NFTs or blockchain items push the rating to…",
              choices: ["PEGI 18", "PEGI 16", "PEGI 12", "No effect"], answer: 0 },
            { type: "mcq", prompt: "Time-limited or quantity-limited shop offers give a minimum of…",
              choices: ["PEGI 12 (possibly 7 if spending is off by default)", "PEGI 18", "PEGI 3", "No effect"], answer: 0 },
            { type: "mcq", prompt: "Unrestricted chat with no block or report tools means…",
              choices: ["PEGI 18", "PEGI 12", "PEGI 7", "No effect"], answer: 0 },
            { type: "mcq", prompt: "Play-by-appointment mechanics (daily quests, login streaks) give a minimum of…",
              choices: ["PEGI 7", "PEGI 16", "PEGI 18", "No effect"], answer: 0 },
            { type: "tf", prompt: "Existing games keep their ratings unless a big update forces a re-rating.", answer: true },
            { type: "tf", prompt: "Loot boxes are classified as gambling under the Gambling Act if prizes stay in-game and cannot be cashed out.", answer: false,
              explanation: "Not gambling, but still under consumer law, advertising rules and industry guidance. If prizes can be sold for real money, you may have walked into gambling regulation." },
            { type: "mcq", prompt: "The ICO Children's code applies when a game is…",
              choices: ["likely to be accessed by children, even if you meant it for adults", "rated PEGI 3 only", "sold on console", "free to play"], answer: 0 },
            { type: "tf", prompt: "Self-declared age is always enough for age assurance.", answer: false },
            { type: "mcq", prompt: "Online Safety Act duties (via Ofcom) apply when a game has…",
              choices: ["user-to-user features like chat, UGC or multiplayer social", "a single-player campaign", "a PEGI 18 rating", "loot boxes"], answer: 0,
              explanation: "Add chat later and the legal load jumps." }
          ]
        },
        {
          id: "consumer-ads-title",
          title: "Consumer law, ads, chain of title",
          description: "Selling to the public, advertising rules, and the folder a publisher will ask for.",
          xp: 25,
          questions: [
            { type: "tf", prompt: "You can contract out of the core UK consumer protections in your EULA.", answer: false },
            { type: "mcq", prompt: "Since April 2025 the CMA can fine directly, without going to court, up to…",
              choices: ["10% of global turnover", "£10,000", "1% of UK sales", "£1 million"], answer: 0 },
            { type: "tf", prompt: "Fake reviews and hidden mandatory fees are specifically banned.", answer: true },
            { type: "tf", prompt: "Steam's refund policy replaces UK consumer law.", answer: false,
              explanation: "It sits on top of the law; it does not replace it." },
            { type: "mcq", prompt: "Under ASA/CAP rules, paid influencer content must be…",
              choices: ["labelled as an ad", "under 60 seconds", "rated by PEGI", "approved by Steam"], answer: 0 },
            { type: "tf", prompt: "A PEGI-16 loot-box mechanic can be advertised as fine for children as long as the game looks cute.", answer: false },
            { type: "mcq", prompt: "Getting playtesters to sign an NDA and consent form also gives you…",
              choices: ["an evidence trail for VGEC testing spend", "a PEGI rating", "VAT relief", "an EMI scheme"], answer: 0 },
            { type: "mcq", prompt: "Which insurance is described as cheap compared with one incident at a playtest or live event?",
              choices: ["Public liability", "Employers' liability", "Cyber", "Professional indemnity"], answer: 0 },
            { type: "mcq", prompt: "Which of these does NOT belong in the chain-of-title folder a publisher will ask for?",
              choices: ["Your personal holiday photos", "IP assignments from the founder and every contractor", "The engine licence and open-source list", "Any grant or tax-credit conditions"], answer: 0,
              explanation: "Build the folder as you go. Retrofitting it in a week is miserable." },
            { type: "reading",
              passage: "The Video Games Expenditure Credit is a Corporation Tax credit for the UK company that designs, produces and {{1}} the game. At least 10% of core development spend must be used or consumed in the UK, and the game must pass the BFI cultural test with 16 of 31 points. {{sentence}} Costs paid for by a grant generally cannot also be claimed, because two public pots cannot fund the same hour of {{2}}.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["tests", "markets", "sells"], answer: 0 },
                    2: { choices: ["labour", "art", "rent"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["The credit is payable, so a loss-making studio with no tax to reduce still receives cash.", "The credit is only available to studios that are already profitable.", "The credit is claimed from Steam rather than HMRC."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the minimum share of core spend that must be used or consumed in the UK.", answer: ["10%", "at least 10%"] },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["VGEC refunds part of UK development spend to a qualifying company, with conditions attached.", "Any studio can claim VGEC on marketing costs.", "Grants and VGEC can both fund the same work."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["How the Games Tax Credit Works", "Choosing an Engine", "Filing the Confirmation Statement"], answer: 0 }
              ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "first-month",
      title: "The first month",
      items: [
        {
          id: "sequence",
          title: "A first-month sequence",
          description: "Putting it all together in the right order.",
          xp: 30,
          questions: [
            { type: "mcq", prompt: "Step one is to choose a legal name and check it against…",
              choices: ["Companies House, a basic trade-mark search, Steam and the app stores", "only Steam", "only Companies House", "your friends"], answer: 0 },
            { type: "mcq", prompt: "Which four things should you save straight after incorporation?",
              choices: ["Certificate, company number, authentication code, personal verification code", "Bank card, PIN, passport, tenancy", "SIC code, VAT number, PEGI rating, EMI scheme", "Nothing; Companies House keeps it all"], answer: 0 },
            { type: "mcq", prompt: "After opening the bank account, the next step for a studio with an existing game is to…",
              choices: ["assign the existing IP from you personally into the Ltd, in writing", "claim VGEC immediately", "pay a dividend", "register a trade mark"], answer: 0 },
            { type: "tf", prompt: "The ledger should have a separate column for labour that might be grant-funded.", answer: true },
            { type: "mcq", prompt: "When should you choose accounts and CT600 software (or an accountant)?",
              choices: ["Before the first year end", "The week the return is due", "After the first HMRC penalty", "Only once profitable"], answer: 0 },
            { type: "mcq", prompt: "Assignment and moral-rights clauses should be in the contractor template…",
              choices: ["before anyone is hired", "after the first invoice", "at launch", "when a publisher asks"], answer: 0 },
            { type: "tf", prompt: "Have one conversation with an accountant who has done games or creative-industry credits before claiming VGEC or taking a dividend.", answer: true },
            { type: "mcq", prompt: "Which two things should you turn on and decide in the calendar step?",
              choices: ["Official reminders, and whether to move the year end to 31 March", "Steam wishlists and a Discord", "VAT registration and payroll", "PEGI and IARC"], answer: 0 },
            { type: "reading",
              passage: "Verify your identity via GOV.UK One Login, incorporate for £{{1}}, and start Corporation Tax registration. Open a business bank account and never mix pots. {{sentence}} Calendar the confirmation statement, first accounts and Corporation Tax dates, and turn on official {{2}}. Put assignment and moral-rights language in any contractor template before anyone is hired.",
              tasks: [
                { kind: "blanks", answers: {
                    1: { choices: ["100", "124", "156"], answer: 0 },
                    2: { choices: ["reminders", "adverts", "invoices"], answer: 0 } } },
                { kind: "sentence",
                  choices: ["Assign existing game IP from you personally into the company, in writing.", "Post the authentication code on social media so you don't lose it.", "Skip the ledger until the game launches."],
                  answer: 0 },
                { kind: "highlight", prompt: "Highlight the three-word rule about company and personal money.", answer: "never mix pots" },
                { kind: "mcq", prompt: "Which idea is expressed in the passage?",
                  choices: ["A short, ordered set of first-month actions keeps the company compliant and its IP secure.", "Contractor contracts can wait until launch.", "Bank accounts are optional for a Ltd."], answer: 0 },
                { kind: "mcq", prompt: "Choose the best title for the passage.",
                  choices: ["Your First Month as a Director", "Understanding PEGI", "Dividend Tax Rates"], answer: 0 }
              ] }
          ]
        }
      ]
    }
    // PASTE NEW CHAPTERS HERE (comma after the previous chapter)
  ]
});
