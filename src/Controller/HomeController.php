<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use GuzzleHttp\Client;

class HomeController extends AbstractController
{

    public function index()
    {
        // Create a client with a base URI
        $client = new Client([
                'base_uri' => 'http://easteregg.wildcodeschool.fr/api/',
            ]);

// Send a request to https://foo.com/api/test
        $response = $client->request('GET', 'eggs/random');
        $body = $response->getBody();
        $content = $body->getContents();
        $egg = json_decode($content);


        return $this->twig->render('Home/index.html.twig', ['egg' => $egg]);
    }




    public function map()
    {
        return $this->twig->render('Page/map.html.twig');
    }
}
