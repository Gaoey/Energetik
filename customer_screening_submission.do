clear all


import delimited "results_choose_size.csv"


replace customertype = "LGS" if customertype == "LGS_BOI"
replace customertype = "Res" if customertype == "Res_TOU"
replace customertype = "SGS_TOU" if customertype == "SGS"


bysort customertype region: egen pb_cutoff = pctile(paybackperiod), p(20)
keep if paybackperiod <= pb_cutoff

table customertype region

collapse (mean) billwithoutsystem systemsize paybackperiod pb_cutoff (count) num_system = scheme (sum) total_size = systemsize, by(customertype region)

replace total_size = total_size/1000 if customertype == "LGS" | customertype == "MGS"
replace systemsize = systemsize/1000 if customertype == "LGS" | customertype == "MGS"

outsheet using potential_customers_screened.csv, replace comma
