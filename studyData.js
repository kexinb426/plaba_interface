// Study content separated from the interface logic for easier maintenance.
const studyTopics = {
    "text_01": "Duloxetine, a type of antidepressant medicine",
    "text_02": "asthma",
    "text_03": "hyperkalemia, which means high potassium level in the blood",
    "text_04": "COVID-19",
    "text_05": "zinc supplementation and absorption"
};

const studyTexts = {
    "text_01": {
        "1": "This chapter covers antidepressants that fall into the class of serotonin (5-HT) and norepinephrine (NE) reuptake inhibitors.",
        "2": "That is, they bind to the 5-HT and NE transporters with varying levels of potency and binding affinity ratios.",
        "3": "Duloxetine is a more potent 5-HT and NE reuptake inhibitor with a more balanced profile of binding at about 10:1 for 5HT and NE transporter binding.",
        "4": "It is also a moderate inhibitor of CYP2D6, so that modest dose reductions and careful monitoring will be needed when prescribing duloxetine in combination with drugs that are preferentially metabolized by CYP2D6.",
        "5": "The most common side effects identified in clinical trials are nausea, dry mouth, dizziness, constipation, insomnia, asthenia, and hypertension, consistent with its mechanisms of action.",
        "6": "Clinical trials to date have demonstrated rates of response and remission in patients with major depression that are comparable to other marketed antidepressants reviewed in this book.",
        "7": "In addition to approval for MDD, duloxetine is approved for diabetic peripheral neuropathic pain, fibromyalgia, and musculoskeletal pain.",
        "8": "All medications in the class can cause serotonin syndrome when combined with MAOIs."
    },
    "text_02": {
        "1": "Asthma is the most common chronic disease of childhood and, in the latter part of the 20th century, reached epidemic proportions.",
        "2": "Asthma is generally believed to result from gene-environment interactions.",
        "3": "There is consensus that a 'window of opportunity' exists during pregnancy and early in life when environmental factors may influence its development.",
        "4": "We review multiple environmental, biologic and sociologic factors that may be important in the development of asthma.",
        "5": "Meta-analyses of studies have demonstrated that multifaceted interventions are required in order to develop asthma prevention.",
        "6": "Multifaceted allergen reduction studies have shown clinical benefits.",
        "7": "Asthma represents a dysfunctional interaction with our genes and the environment to which they are exposed, especially in fetal and early infant life.",
        "8": "The increasing prevalence of asthma also may be an indication of increased population risk for the development of other chronic non-communicable autoimmune diseases.",
        "9": "This review will focus on the factors which may be important in the primary prevention of asthma.",
        "10": "Better understanding of the complex gene-environment interactions involved in the development of asthma will provide insight into personalized interventions for asthma prevention."
    },
    "text_03": {
        "1": "In patients with advanced-stage chronic kidney disease (CKD), progressive kidney function decline leads to increased risk for hyperkalemia (serum potassium > 5.0 or >5.5 mEq/L).",
        "2": "Medications such as renin-angiotensin-aldosterone system inhibitors pose an additional hyperkalemia risk, especially in patients with CKD.",
        "3": "When hyperkalemia develops, clinicians often recommend a diet that is lower in potassium content.",
        "4": "This review discusses the barriers to adherence to a low-potassium diet and the impact of dietary restrictions on adverse clinical outcomes.",
        "5": "Accumulating evidence indicates that a diet that incorporates potassium-rich foods has multiple health benefits, which may also be attributable to the other vitamin, mineral, and fiber content of potassium-rich foods.",
        "6": "These benefits include blood pressure reductions and reduced risks for cardiovascular disease and stroke.",
        "7": "High-potassium foods may also prevent CKD progression and reduce mortality risk in patients with CKD.",
        "8": "Adjunctive treatment with the newer potassium-binding agents, patiromer and sodium zirconium cyclosilicate, may allow for optimal renin-angiotensin-aldosterone system inhibitor therapy in patients with CKD and hyperkalemia, potentially making it possible for patients with CKD and hyperkalemia to liberalize their diet.",
        "9": "This may allow them the health benefits of a high-potassium diet without the increased risk for hyperkalemia, although further studies are needed."
    },
    "text_04": {
        "1": "As COVID-19 continues to spread rapidly worldwide and variants continue to emerge, the development and deployment of safe and effective vaccines are urgently needed.",
        "2": "Here, we developed an mRNA vaccine based on the trimeric receptor-binding domain (RBD) of the SARS-CoV-2 spike (S) protein fused to ferritin-formed nanoparticles (TF-RBD).",
        "3": "Compared to the trimeric form of the RBD mRNA vaccine (T-RBD), TF-RBD delivered intramuscularly elicited robust and durable humoral immunity as well as a Th1-biased cellular response.",
        "4": "After further challenge with live SARS-CoV-2, immunization with a two-shot low-dose regimen of TF-RBD provided adequate protection in hACE2-transduced mice.",
        "5": "In addition, the mRNA template of TF-RBD was easily and quickly engineered into a variant vaccine to address SARS-CoV-2 mutations.",
        "6": "The TF-RBD multivalent vaccine produced broad-spectrum neutralizing antibodies against Alpha (B.1.1.7) and Beta (B.1.351) variants.",
        "7": "This mRNA vaccine based on the encoded self-assembled nanoparticle-based trimer RBD provides a reference for the design of mRNA vaccines targeting SARS-CoV-2."
    },
    "text_05": {
        "1": "The comparative absorption of zinc after oral administration of three different complexed forms was studied in 15 healthy human volunteers in a double-blind four-period crossover trial.",
        "2": "The individuals were randomly divided into four groups.",
        "3": "Each group rotated for four week periods through a random sequence of oral supplementation including: zinc picolinate, zinc citrate, and zinc gluconate (equivalent to 50 mg elemental zinc per day) and placebo.",
        "4": "Zinc was measured in hair, urine, erythrocyte and serum before and after each period.",
        "5": "At the end of four weeks hair, urine and erythrocyte zinc levels rose significantly (p less than 0.005, p less than 0.001, and p less than 0.001) during zinc picolinate administration.",
        "6": "There was no significant change in any of these parameters from zinc gluconate, zinc citrate or placebo administration.",
        "7": "There was a small, insignificant rise in serum zinc during zinc picolinate, zinc citrate and placebo supplementation.",
        "8": "The results of this study suggest that zinc absorption in humans can be improved by complexing zinc with picolinic acid."
    }
};

const studyQuizzes = {
    "text_01": [
        // {
        //     "sentence_id": 1,
        //     "original_sentence": "This chapter covers antidepressants that fall into the class of serotonin (5-HT) and norepinephrine (NE) reuptake inhibitors.",
        //     "question": "What is this chapter mainly focused on?",
        //     "options": {
        //         "A": "Medicines that act through a similar dual-chemical pathway.",
        //         "B": "Medicines that adjust every mood-related chemical in the brain.",
        //         "C": "A detailed description of two brain chemicals themselves.",
        //         "D": "Treatments used only for depression and not for anything else."
        //     },
        //     "correct_answer": "A"
        // },
        // {
        //     "sentence_id": 2,
        //     "original_sentence": "That is, they bind to the 5-HT and NE transporters with varying levels of potency and binding affinity ratios.",
        //     "question": "How do these drugs interact with certain brain processes?",
        //     "options": {
        //         "A": "They attach to specific targets in different strengths.",
        //         "B": "They shut down the removal of brain chemicals completely.",
        //         "C": "They increase the number of transport sites in the brain.",
        //         "D": "They work so similarly that doctors treat them as identical."
        //     },
        //     "correct_answer": "A"
        // },
        // {
        //     "sentence_id": 3,
        //     "original_sentence": "Duloxetine is a more potent 5-HT and NE reuptake inhibitor with a more balanced profile of binding at about 10:1 for 5HT and NE transporter binding.",
        //     "question": "What does the profile of this medicine imply about how it acts?",
        //     "options": {
        //         "A": "It has a stronger overall effect on its two main targets.",
        //         "B": "It works almost only on one chemical and barely touches the other.",
        //         "C": "It influences both chemicals in exactly the same amount.",
        //         "D": "It is considered stronger mainly because the dosage is higher."
        //     },
        //     "correct_answer": "A"
        // },
        {
            "sentence_id": 4,
            "original_sentence": "It is also a moderate inhibitor of CYP2D6, so that modest dose reductions and careful monitoring will be needed when prescribing duloxetine in combination with drugs that are preferentially metabolized by CYP2D6.",
            "question": "Why is extra caution needed when this medicine is given with certain others?",
            "options": {
                "A": "It slows the breakdown of some drugs, requiring adjustments.",
                "B": "It forces doctors to stop all other medicines beforehand.",
                "C": "It means people should lower their dose even without taking anything else.",
                "D": "It cannot be combined with any other antidepressant."
            },
            "correct_answer": "A"
        },
        // {
        //     "sentence_id": 5,
        //     "original_sentence": "The most common side effects identified in clinical trials are nausea, dry mouth, dizziness, constipation, insomnia, asthenia, and hypertension, consistent with its mechanisms of action.",
        //     "question": "What can be said about the unwanted reactions seen in studies?",
        //     "options": {
        //         "A": "They match what would be expected from how the drug works.",
        //         "B": "They only happen at unusually high amounts of the drug.",
        //         "C": "Most of them were unrelated issues appearing during the study.",
        //         "D": "They mainly happened because participants already had these problems."
        //     },
        //     "correct_answer": "A"
        // },
        {
            "sentence_id": 6,
            "original_sentence": "Clinical trials to date have demonstrated rates of response and remission in patients with major depression that are comparable to other marketed antidepressants reviewed in this book.",
            "question": "How does this medicine perform in improving depression?",
            "options": {
                "A": "Its success is similar to that of several other established options.",
                "B": "It works better than most earlier drugs.",
                "C": "It mainly helps people who did not improve on any other treatment.",
                "D": "Nearly everyone who improves ends up fully symptom-free."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 7,
            "original_sentence": "In addition to approval for MDD, duloxetine is approved for diabetic peripheral neuropathic pain, fibromyalgia, and musculoskeletal pain.",
            "question": "What can be said about the range of conditions it is cleared to treat?",
            "options": {
                "A": "It has official uses that include several types of long-lasting pain.",
                "B": "It works as a general painkiller for almost any discomfort.",
                "C": "It fixes the root cause of nerve and muscle problems.",
                "D": "It should be given to nearly anyone with persistent body pain."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 8,
            "original_sentence": "All medications in the class can cause serotonin syndrome when combined with MAOIs.",
            "question": "What risk appears when these medicines are taken together with a certain older drug type?",
            "options": {
                "A": "The combination can trigger a serious reaction involving high serotonin activity.",
                "B": "The danger only comes from using two older drugs together.",
                "C": "The reaction is mild, so low amounts are safe.",
                "D": "People taking these medicines will show warning signs even without the older drug."
            },
            "correct_answer": "A"
        }
    ],
    
    "text_02": [
        {
            "sentence_id": 1,
            "original_sentence": "Asthma, which typically begins in childhood and is the most common chronic disease of childhood, has reached epidemic proportions.",
            "question": "Which statement best reflects what the authors intend to convey?",
            "options": {
                "A": "Asthma now spreads easily between children in a way similar to catching a flu virus.",
                "B": "If someone did not show asthma as a child, they cannot develop the condition later in life.",
                "C": "Because it is common in children, asthma is usually minor and rarely considered a health concern.",
                "D": "Asthma affects many young people and has become far more widespread than before."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 2,
            "original_sentence": "Asthma is associated with gene-environment interactions, and there is consensus that a 'window of opportunity' exists early in life when environmental factors may influence its development.",
            "question": "Which statement best reflects the idea expressed in this sentence?",
            "options": {
                "A": "Only early surroundings determine whether someone develops asthma; genes do not matter.",
                "B": "The key time when surroundings matter most occurs in adult years.",
                "C": "Once the early period ends, nothing can be done to shape asthma risk.",
                "D": "Both inherited factors and early experiences play a role in shaping the chance of developing asthma."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 3,
            "original_sentence": "This review considers biologic and sociologic factors in the development of allergy and asthma.",
            "question": "Which option best captures the intended point of this sentence?",
            "options": {
                "A": "The authors conducted a new clinical trial that tests a specific treatment.",
                "B": "The authors discuss only bodily processes and do not include social influences.",
                "C": "The authors claim they have proven exactly which factors cause these conditions.",
                "D": "The authors look at multiple types of influences—both bodily and social—when exploring how these conditions arise."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 4,
            "original_sentence": "Meta-analysis of studies demonstrates that monoallergen reduction does not impact asthma prevention.",
            "question": "Which statement best reflects the meaning of this sentence?",
            "options": {
                "A": "Reducing one allergen offers at least a slight benefit for stopping asthma from appearing.",
                "B": "Cutting down on one allergen mainly helps people who already have asthma.",
                "C": "The findings come from a single small study rather than from many studies combined.",
                "D": "Limiting exposure to only one trigger shows no evidence of helping people avoid developing asthma."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 5,
            "original_sentence": "However, multifaceted allergen reduction studies have shown clinical benefit.",
            "question": "Which statement best matches what the authors are suggesting here?",
            "options": {
                "A": "Tackling several allergens at once can completely cure asthma.",
                "B": "When many allergens are targeted at once, people usually show no improvement.",
                "C": "The approach mainly changes lab values and does not help people feel better.",
                "D": "Addressing several sources of exposure together has been linked to helpful changes in people’s health."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 6,
            "original_sentence": "We propose that allergic diseases, including asthma, represent a dysfunctional interaction with our environment and that the increasing prevalence of asthma and allergy herald increased population risk for the development of other inflammatory and autoimmune diseases.",
            "question": "Which option best reflects the authors’ main message?",
            "options": {
                "A": "People have asthma mostly because they make poor lifestyle choices.",
                "B": "Anyone with asthma or allergies will eventually develop other immune-related diseases.",
                "C": "The authors are focused only on asthma and not on any other allergic conditions.",
                "D": "Rising rates of these conditions may signal broader concerns about immune-related illnesses in the population."
            },
            "correct_answer": "D"
        },
        {
            "sentence_id": 7,
            "original_sentence": "Better understanding of the complex factors for asthma and allergies may provide insight into many other chronic complex diseases.",
            "question": "Which option best reflects the intention of this sentence?",
            "options": {
                "A": "Once asthma is fully understood, many long-term illnesses can be completely cured.",
                "B": "Asthma directly causes many other long-lasting diseases, so treating it fixes them.",
                "C": "Research on other chronic diseases may no longer be needed.",
                "D": "Studying these conditions may shed light on issues that appear in other long-lasting illnesses."
            },
            "correct_answer": "D"
        }
    ],
    "text_03": [
        {
            "sentence_id": 1,
            "original_sentence": "In patients with advanced-stage CKD, progressive kidney function decline leads to increased risk for hyperkalemia.",
            "question": "What does this sentence suggest about people with severe kidney problems?",
            "options": {
                "A": "People with severe kidney problems are more likely to have higher-than-normal potassium levels as their kidneys weaken.",
                "B": "People with severe kidney problems usually get high potassium mainly because of what they eat.",
                "C": "High potassium is the main reason their kidneys get worse over time.",
                "D": "Anyone with any form of kidney trouble will almost certainly develop high potassium."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 2,
            "original_sentence": "Medications such as renin-angiotensin-aldosterone system inhibitors pose an additional hyperkalemia risk, especially in patients with CKD.",
            "question": "What is the main idea about certain medications used in kidney conditions?",
            "options": {
                "A": "Certain common drugs for kidney-related conditions can raise potassium levels even further in people whose kidneys are already impaired.",
                "B": "These drugs add only a tiny amount of extra risk that is usually too small to matter.",
                "C": "These drugs raise potassium mostly in people without kidney disease.",
                "D": "Any drug used for kidney disease acts the same way and raises potassium in the same manner."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 3,
            "original_sentence": "When hyperkalemia develops, clinicians often recommend a diet that is lower in potassium content.",
            "question": "What do doctors usually do when potassium levels become too high?",
            "options": {
                "A": "When potassium levels climb, doctors usually ask patients to cut back on foods that contain a lot of potassium.",
                "B": "Changing to a lower-potassium diet is normally enough to fix the issue completely.",
                "C": "A low-potassium diet is meant to be used only for a short period until tests return to normal.",
                "D": "The diet typically requires avoiding potassium altogether rather than reducing it."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 4,
            "original_sentence": "This review discusses the barriers to adherence to a low-potassium diet and the impact of dietary restrictions on adverse clinical outcomes.",
            "question": "What does the review focus on regarding low-potassium diets?",
            "options": {
                "A": "The article looks at why people struggle to stick with low-potassium eating plans and how those struggles relate to serious health results.",
                "B": "The article mainly presents a new experiment testing low-potassium diets.",
                "C": "The review proves that low-potassium diets always lead to better health outcomes.",
                "D": "The review talks only about people who follow the diet faithfully, not about those who can’t."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 5,
            "original_sentence": "Accumulating evidence indicates that a diet that incorporates potassium-rich foods has multiple health benefits, which may also be attributable to other vitamin, mineral, and fiber content.",
            "question": "What does current research suggest about foods rich in potassium?",
            "options": {
                "A": "Research suggests that foods high in potassium—and the other nutrients they contain—can support overall health in several ways.",
                "B": "The helpful effects of these foods come only from potassium and not from anything else in them.",
                "C": "The evidence already proves that all high-potassium foods are always good for everyone.",
                "D": "Any food high in potassium is considered healthy even if it lacks other useful nutrients."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 6,
            "original_sentence": "These benefits include blood pressure reductions and reduced risks for cardiovascular disease and stroke.",
            "question": "What kinds of benefits may come from these foods?",
            "options": {
                "A": "Eating these foods may help lower blood pressure and lessen the chances of major heart and blood-vessel problems.",
                "B": "People who eat these foods can completely avoid heart disease and stroke.",
                "C": "Blood pressure usually drops sharply and quickly for everyone who starts eating these foods.",
                "D": "These effects mainly apply to people without kidney disease and not to those with it."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 7,
            "original_sentence": "High-potassium foods may also prevent CKD progression and reduce mortality risk in patients with CKD.",
            "question": "What additional effects might these foods have for people with kidney disease?",
            "options": {
                "A": "Some studies suggest that these foods might slow kidney decline and help people with kidney disease live longer.",
                "B": "Eating these foods can cure kidney disease rather than just slow it down.",
                "C": "A high-potassium diet removes the risk of death for people with kidney disease.",
                "D": "These foods are safe for all people with kidney disease, no matter how high their potassium levels are."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 8,
            "original_sentence": "Adjunctive treatment with the newer potassium-binding agents…may allow for optimal therapy…potentially making it possible for patients…to liberalize their diet.",
            "question": "How might newer medicines help people with CKD and high potassium?",
            "options": {
                "A": "Newer medicines that help reduce potassium levels might let patients keep using important kidney drugs and have more freedom in what they eat.",
                "B": "These medicines can replace those kidney drugs entirely, so patients no longer need them.",
                "C": "With these medicines, patients can eat anything they want without thinking about potassium.",
                "D": "These medicines mainly work by changing the potassium content of foods before they are eaten."
            },
            "correct_answer": "A"
        },
        {
            "sentence_id": 9,
            "original_sentence": "This may allow them the health benefits of a high-potassium diet without the increased risk for hyperkalemia, although further studies are needed.",
            "question": "What might these treatments make possible for some patients?",
            "options": {
                "A": "If these treatments work as hoped, patients might be able to enjoy the good effects of potassium-rich foods without raising their potassium levels too much, but more research is required.",
                "B": "It is already clear that patients can safely eat high-potassium diets without any real danger.",
                "C": "People with kidney disease now have a lower chance of high potassium than those without kidney issues when eating high-potassium foods.",
                "D": "The approach is well-proven, so new research is no longer necessary."
            },
            "correct_answer": "A"
        }
    ],
    "text_04": [
    ],
    "text_05": [
    ]
};
