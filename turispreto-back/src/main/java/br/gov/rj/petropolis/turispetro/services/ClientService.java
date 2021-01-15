package br.gov.rj.petropolis.turispetro.services;

import static java.util.Collections.emptyList;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.gov.rj.petropolis.turispetro.model.Client;
import br.gov.rj.petropolis.turispetro.model.dto.ClientDTO;
import br.gov.rj.petropolis.turispetro.repositories.ClientRepository;
import br.gov.rj.petropolis.turispetro.services.exceptions.DatabaseException;
import br.gov.rj.petropolis.turispetro.services.exceptions.ResourceNotFoundException;

@Service
public class ClientService implements UserDetailsService {

	@Autowired
	ClientRepository clientRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Client user = clientRepository.findByLogin(username);
		if (user == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(user.getLogin(), user.getPassword(), emptyList());
	}

	public Page<ClientDTO> findAllPages(PageRequest pageRequest) {

		Page<Client> list = clientRepository.findAll(pageRequest);

		return list.map(x -> new ClientDTO(x));
	}

	public ClientDTO insert(ClientDTO client) {
		Client cli = new Client();
		copyDTOToModel(client, cli);
		cli = clientRepository.save(cli);
		return new ClientDTO(cli);
	}

	private void copyDTOToModel(ClientDTO client, Client cli) {
		cli.setLogin(client.getLogin());
		cli.setPassword(client.getPassword());
		cli.setUserType(client.getUserType());

	}

	public ClientDTO update(Integer id, ClientDTO client) {

		try {
			Client cli = clientRepository.getOne(id);
			copyDTOToModel(client, cli);
			cli = clientRepository.save(cli);
			return new ClientDTO(cli);
		} catch (EntityNotFoundException e) {

			throw new ResourceNotFoundException("Usuário com o ID: " + id + " não encontrado.");

		}

	}

	public void delete(Integer id) {
		try {
            clientRepository.deleteById(id);
        }
        catch(EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Usuário com o id: " + id + " não encontrado!");
        }
        catch(DataIntegrityViolationException e) {
            throw new DatabaseException("Usuário com o id: " + id + " não pode ser apagado!");
        }
		
	}

}
