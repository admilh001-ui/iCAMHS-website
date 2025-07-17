import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ChildPsychiatryWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Western Cape Child & Adolescent Psychiatry Portal
      </h1>

      <Tabs defaultValue="home" className="w-full max-w-6xl mx-auto">
        <TabsList className="flex flex-wrap justify-center gap-2">
          {[
            "home",
            "about",
            "referral",
            "guidelines",
            "training",
            "resources",
            "directory",
            "forms",
            "news",
            "faq",
            "contact"
          ].map(tab => (
            <TabsTrigger key={tab} value={tab} className="capitalize">
              {tab.replace("_", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="home">
          <Card className="mt-4">
            <CardContent className="p-6 text-center">
              <p className="text-xl text-blue-800">
                Welcome to the official portal for child and adolescent psychiatric services in the Western Cape. 
              </p>
              <div className="mt-4 space-x-4">
                <Button variant="link" asChild>
                  <a href="https://www.sun.ac.za/english/faculty/healthsciences/psychiatry/childpsychiatry" target="_blank">Tygerberg Child Psychiatry</a>
                </Button>
                <Button variant="link" asChild>
                  <a href="https://www.sun.ac.za/english/faculty/healthsciences/psychiatry/childpsychiatry" target="_blank">Division of Child & Adolescent Psychiatry</a>
                </Button>
                <Button variant="link" asChild>
                  <a href="https://www.westerncape.gov.za/facility/lentegeur-hospital" target="_blank">Lentegeur Hospital Child & Family Unit</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Learn about our mission to improve the mental health of children and adolescents through accessible, evidence-based care.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referral">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Step-by-step referral guidelines, contact details, and downloadable forms for healthcare professionals.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Access clinical protocols, diagnostic tools, and prescribing guides tailored to the Western Cape context.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                View upcoming training opportunities, CPD modules, and downloadable educational materials.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Access handouts for caregivers, support material for schools, and multilingual resources.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="directory">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Find psychiatric services across the province, with contact details and facility information.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Download referral templates, consent forms, and clinical tools.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Stay updated on service developments, new guidelines, and provincial mental health news.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Quick answers to commonly asked questions by healthcare workers.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card className="mt-4">
            <CardContent className="p-6">
              <p>
                Reach out to us for questions, support, or technical issues. Feedback welcome.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
