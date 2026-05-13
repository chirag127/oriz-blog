import csv
import re

# Expanded list of substances related to the series and general CNS/Pain/Sedation
substances = [
    # Opioids
    "Codeine", "Tramadol", "Tapentadol", "Morphine", "Fentanyl", "Buprenorphine", "Methadone", "Pentazocine", "Oxycodone", "Hydrocodone",
    # Benzodiazepines & Z-Drugs
    "Alprazolam", "Diazepam", "Clonazepam", "Lorazepam", "Nitrazepam", "Midazolam", "Chlordiazepoxide", "Clobazam", "Etizolam", "Oxazepam", "Temazepam", "Triazolam", "Flurazepam",
    "Zolpidem", "Zopiclone", "Eszopiclone", "Zaleplon",
    # Barbiturates
    "Phenobarbital", "Phenobarbitone", "Pentobarbital", "Secobarbital", "Amobarbital",
    # Gabapentinoids
    "Pregabalin", "Gabapentin",
    # Muscle Relaxants
    "Carisoprodol", "Baclofen", "Tizanidine", "Chlorzoxazone", "Cyclobenzaprine", "Metaxalone", "Orphenadrine", "Thiocolchicoside",
    # Stimulants
    "Methylphenidate", "Modafinil", "Pseudoephedrine", "Sibutramine", "Amphetamine", "Dextroamphetamine", "Lisdexamfetamine", "Armodafinil",
    # Dissociatives & Anesthetics
    "Ketamine", "Dextromethorphan", "Nitrous Oxide", "Propofol", "Bupivacaine", "Lignocaine", "Lidocaine", "Sevoflurane", "Isoflurane",
    # Antihistamines (Sedating & Non-sedating)
    "Promethazine", "Diphenhydramine", "Chlorpheniramine", "Hydroxyzine", "Pheniramine", "Cyproheptadine", "Cetirizine", "Levocetirizine", "Fexofenadine", "Loratadine", "Ebastine", "Bilastine", "Doxylamine",
    # Anticholinergics
    "Trihexyphenidyl", "Atropine", "Scopolamine", "Homatropine", "Clidinium", "Dicyclomine", "Glycopyrrolate",
    # Antidepressants
    "Amitriptyline", "Quetiapine", "Bupropion", "Escitalopram", "Sertraline", "Fluoxetine", "Paroxetine", "Fluvoxamine", "Venlafaxine", "Desvenlafaxine", "Duloxetine", "Mirtazapine", "Imipramine", "Clomipramine", "Nortriptyline", "Doxepin", "Desipramine", "Trimipramine", "Protriptyline", "Amoxapine",
    # Antipsychotics
    "Olanzapine", "Risperidone", "Amisulpride", "Aripiprazole", "Haloperidol", "Chlorpromazine", "Trifluoperazine", "Thioridazine", "Fluphenazine", "Zuclopenthixol", "Clozapine", "Lurasidone", "Ziprasidone", "Paliperidone", "Iloperidone", "Asenapine",
    # Anticonvulsants
    "Valproate", "Valproic", "Levetiracetam", "Carbamazepine", "Topiramate", "Lamotrigine", "Oxcarbazepine", "Phenytoin", "Ethosuximide", "Lacosamide", "Zonisamide", "Vigabatrin", "Tiagabine", "Perampanel",
    # Steroids
    "Nandrolone", "Testosterone", "Stanozolol", "Clenbuterol", "Oxandrolone", "Methandienone", "Dianabol", "Trenbolone", "Boldenone", "Mesterolone",
    # Inhalants & Others
    "Toluene", "Alkyl Nitrites", "Cannabis", "Bhang", "Disulfiram", "Naltrexone", "Acamprosate", "Melatonin", "Agomelatine"
]

found_drugs = []

try:
    with open('scripts/rate.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        data = list(reader)
except FileNotFoundError:
    print("rate.csv not found in scripts directory.")
    exit()

for row in data:
    generic_name = row['Generic Name'].lower()
    matched_substances = []
    for s in substances:
        # Match substance name as a word
        if re.search(rf'\b{re.escape(s.lower())}\b', generic_name):
            matched_substances.append(s)
    
    if matched_substances:
        try:
            mrp = float(row['MRP'])
            # We want to list it under the first matched substance for grouping, 
            # or all if it's a mix. The user said "mention that" if it contains the salt.
            for s in matched_substances:
                found_drugs.append({
                    "Substance": s,
                    "Full Name": row['Generic Name'],
                    "Pack Size": row['Unit Size'],
                    "MRP": mrp
                })
        except:
            continue

# Sort by Substance, then by MRP
sorted_drugs = sorted(found_drugs, key=lambda x: (x['Substance'], x['MRP']))

# Save to the new full list file
output_file = 'scripts/substance_mrp_full_list.txt'
with open(output_file, 'w', encoding='utf-8') as out:
    out.write("Substance MRP Full List (Every Composition Containing the Target Salts - Comprehensive CNS & SUEI Edition)\n")
    out.write("=" * 130 + "\n")
    out.write(f"{'Substance':<20} | {'MRP':<8} | {'Pack Size':<15} | {'Full Name'}\n")
    out.write("-" * 130 + "\n")
    for d in sorted_drugs:
        out.write(f"{d['Substance']:<20} | Rs {d['MRP']:>6.2f} | {d['Pack Size']:<15} | {d['Full Name']}\n")

print(f"Full list generated with {len(found_drugs)} entries.")
print(f"Saved to {output_file}")
