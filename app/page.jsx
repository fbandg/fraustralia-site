'use client';
import { useState } from "react";
import { Phone, Mail, Hammer, Shield, Building2, Wrench, ClipboardCheck, HardHat, ArrowRight, Download, ChevronRight, Menu } from "lucide-react";
import "./globals.css";

// Brand tokens – tweak to match logo precisely
const BRAND = {
  orange: "#F0592A", // primary from the logo (approx)
  dark: "#4B5358",   // slate grey from the logo (approx)
  lightGray: "#F2F4F7",
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img src="/logo.png" alt="F&R Australia logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight" style={{color: BRAND.orange}}>F&R AUSTRALIA</div>
              <div className="text-[11px] uppercase tracking-widest text-gray-500">ABN: 691 545 436</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#safety" className="hover:opacity-80">Safety</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <a href="#quote" className="ml-2 inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold text-white shadow-md" style={{backgroundColor: BRAND.orange}}>
              Request a Quote <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-2 text-sm">
            {[
              ["#services","Services"],
              ["#projects","Projects"],
              ["#safety","Safety"],
              ["#contact","Contact"],
            ].map(([href,label]) => (
              <a key={href} href={href} className="block py-2">{label}</a>
            ))}
            <a href="#quote" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold text-white" style={{backgroundColor: BRAND.orange}}>Request a Quote</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden" style={{background: `linear-gradient(135deg, ${BRAND.dark} 0%, #1f2326 40%, ${BRAND.orange} 140%)`}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 30%)"}}/>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">Panel Installation<br/> Done <span className="whitespace-nowrap">Right—Safely.</span></h1>
            <p className="mt-5 text-lg md:text-xl text-gray-100/90 max-w-xl">Commercial façade & insulated panel installation across Australia. Program-driven, safety-forward, and built to meet spec first time.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white shadow-lg" style={{backgroundColor: BRAND.orange}}>
                Get a fast quote <ArrowRight size={18} />
              </a>
              <a href="#capability" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold border border-white/30 text-white">
                Download capability <Download size={18} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-200/80">
              <div className="flex items-center gap-2"><Shield size={16}/> ISO-aligned H&S</div>
              <div className="flex items-center gap-2"><ClipboardCheck size={16}/> Prequal ready</div>
              <div className="flex items-center gap-2"><HardHat size={16}/> Licensed & inducted</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white/5 backdrop-blur p-6 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {icon: Hammer, title: "Insulated Panels", desc: "Roof & wall systems, cold stores, food-grade"},
                  {icon: Building2, title: "Façade Cladding", desc: "Architectural panels, rainscreens, sub-framing"},
                  {icon: Wrench, title: "Repairs & Remedials", desc: "Defect rectification, seal/flash, re-fix"},
                  {icon: Shield, title: "Safety Delivery", desc: "SWMS, SSSP, lift plans, QA packs"},
                ].map(({icon:Icon,title,desc},i)=> (
                  <div key={i} className="rounded-2xl bg-white/10 p-4 border border-white/10">
                    <Icon className="mb-2"/>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm text-white/80">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Services</h2>
            <a href="#quote" className="hidden md:inline-flex items-center gap-2 font-semibold" style={{color: BRAND.orange}}>Request a quote <ChevronRight size={18}/></a>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Insulated Panel Installation",
                bullets: [
                  "Kingspan / Bondor / Metecno systems",
                  "Roof & wall, cool/cold stores",
                  "Program-led install crews",
                ],
              },
              {
                title: "Façade & Architectural Cladding",
                bullets: [
                  "Rainscreen & cassette systems",
                  "Sub-framing & flashings",
                  "QA documentation",
                ],
              },
              {
                title: "Repairs, Remedials & Maintenance",
                bullets: [
                  "Leak investigation & reseal",
                  "Panel re-fix & alignment",
                  "Make-safe & insurance support",
                ],
              },
            ].map((card,i)=> (
              <div key={i} className="rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
                <div className="text-xl font-extrabold" style={{color: BRAND.dark}}>{card.title}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {card.bullets.map((b,idx)=>(
                    <li key={idx} className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full" style={{backgroundColor: BRAND.orange}}></span>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-16 md:py-20" style={{backgroundColor: BRAND.lightGray}}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Safety First, Always</h2>
          <p className="mt-4 max-w-3xl text-gray-600">We operate under the WHS framework, deliver site-specific SSSPs/SWMS, lift plans, and maintain incident reporting and QA packs. Crews are inducted, ticketed, and measured against leading indicators—not lagging excuses.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Site-specific SSSP & SWMS","Fully documented methods for each project"],
              ["Lift Planning & Exclusion Zones","Taglines, wind limits, certified gear"],
              ["Inductions & Competency","EWP, WAH, plant spotter, first aid"],
              ["Audits & Close-out Packs","Photos, ITPs, checklists, as-builts"],
            ].map(([title,desc],i)=> (
              <div key={i} className="rounded-2xl bg-white p-5 border border-gray-200">
                <div className="font-bold text-gray-900">{title}</div>
                <div className="text-sm text-gray-600 mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Featured Projects</h2>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 font-semibold" style={{color: BRAND.orange}}>Discuss your build <ChevronRight size={18}/></a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {Array.from({length:3}).map((_,i)=> (
              <div key={i} className="group rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="h-44 bg-gray-200"/>
                <div className="p-5">
                  <div className="font-extrabold">Industrial Facility #{i+1}</div>
                  <div className="text-sm text-gray-600 mt-1">Insulated panel roof & wall system, fast-track program, QA close-out.</div>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold" style={{color: BRAND.orange}}>View details <ChevronRight size={16}/></a>\n                </div>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* Capability CTA */}\n      <section id=\"capability\" className=\"py-14\" style={{background: `linear-gradient(135deg, ${BRAND.lightGray}, #ffffff)`}}>\n        <div className=\"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center\">\n          <div>\n            <h3 className=\"text-2xl md:text-3xl font-black\">Download our Capability Statement</h3>\n            <p className=\"mt-2 text-gray-600\">Includes services, safety systems, insurances, and sample QA pack. Perfect for tenders and prequal.</p>\n          </div>\n          <div className=\"md:text-right\">\n            <a href=\"#\" className=\"inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white shadow\" style={{backgroundColor: BRAND.dark}}>Download PDF <Download size={18}/></a>\n          </div>\n        </div>\n      </section>\n\n      {/* Contact */}\n      <section id=\"contact\" className=\"py-16 md:py-20\">\n        <div className=\"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10\">\n          <div>\n            <h2 className=\"text-3xl md:text-4xl font-black tracking-tight\">Contact</h2>\n            <p className=\"mt-3 text-gray-600\">Send plans, RFQs, or invite us to tender. We’ll respond quickly with scope review and program options.</p>\n            <div className=\"mt-6 space-y-3 text-sm\">\n              <div className=\"flex items-center gap-3\"><Phone size={18}/> <span>+61 (0) 400 000 000</span></div>\n              <div className=\"flex items-center gap-3\"><Mail size={18}/> <span>tenders@fraustralia.com.au</span></div>\n            </div>\n          </div>\n\n          <form id=\"quote\" className=\"rounded-3xl p-6 border border-gray-200 shadow-sm bg-white\">\n            <div className=\"grid grid-cols-1 gap-4\">\n              <div>\n                <label className=\"text-sm font-semibold\">Name</label>\n                <input className=\"mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 p-3\" placeholder=\"Site/PM name\" />\n              </div>\n              <div className=\"grid md:grid-cols-2 gap-4\">\n                <div>\n                  <label className=\"text-sm font-semibold\">Email</label>\n                  <input type=\"email\" className=\"mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 p-3\" placeholder=\"name@company.com\" />\n                </div>\n                <div>\n                  <label className=\"text-sm font-semibold\">Phone</label>\n                  <input className=\"mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 p-3\" placeholder=\"+61\" />\n                </div>\n              </div>\n              <div>\n                <label className=\"text-sm font-semibold\">Project Location</label>\n                <input className=\"mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 p-3\" placeholder=\"City / Site address\" />\n              </div>\n              <div>\n                <label className=\"text-sm font-semibold\">Scope Summary</label>\n                <textarea className=\"mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 p-3\" rows={4} placeholder=\"Panels/cladding, m², program, access, craneage, etc.\" />\n              </div>\n              <button type=\"button\" className=\"inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white\" style={{backgroundColor: BRAND.orange}}>Submit Enquiry <ArrowRight size={18}/></button>\n            </div>\n          </form>\n        </div>\n      </section>\n\n      {/* Footer */}\n      <footer className=\"py-10\" style={{backgroundColor: BRAND.dark}}>\n        <div className=\"max-w-7xl mx-auto px-4 text-gray-200\">\n          <div className=\"flex flex-col md:flex-row md:items-center md:justify-between gap-6\">\n            <div>\n              <div className=\"font-extrabold tracking-tight\" style={{color: BRAND.orange}}>F&R AUSTRALIA</div>\n              <div className=\"text-xs\">ABN: 691 545 436</div>\n            </div>\n            <div className=\"text-sm\">© {new Date().getFullYear()} F&R Australia. All rights reserved.</div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  );\n}\n